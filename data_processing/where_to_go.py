"""Tell a taxi where to drive for the fastest pickup time."""
import json
import time
import numpy as np
import geopy.distance
from pprint import pprint
from ml_interface import MLInterface


class WhereToGo:
    def __init__(self, path_to_config):
        # Import config
        with open(path_to_config) as config_file:
            self._config = json.load(config_file)
        self._ml_interface = MLInterface(self._config)
        self._cluster_centers = self._ml_interface.cluster_centers()
        self._n_clusters = len(self._cluster_centers)

        # Initialize list of taxis per cluster
        if self._config["path_to_taxis_per_cluster"]:
            self._taxi_positions = np.load(self._config["path_to_taxis_per_cluster"]).tolist()
        else:
            self._taxi_positions = np.zeros(shape=(self._n_clusters,))

    def where_to_go(self, taxi_position, top_n_clusters=3, timestamp=time.time()):
        """Predicts to which cluster a taxi should go.

         Args:
            taxi_position: Current position of the taxi in cartesian coordinates as a tuple of two floats.
            top_n_clusters: How many of the top clusters should be returned.
            timestamp: Current time of prediction. (Only relevant if data updates are implemented)

        Returns the top clusters where a taxi should go as a dictionary.
        """
        predicted_demand = self._ml_interface.predict_demand(timestamp)
        self._taxi_positions = predicted_demand + np.random.randint(5)-2
        time_to_clusters, distance_to_clusters = self._calc_time_distance(taxi_position)
        corrected_demand = self._correct_demand(predicted_demand, time_to_clusters)
        # Get clusters sorted by taxi demand in descending order
        sorted_clusters = np.argsort(np.array(corrected_demand)).tolist()[::-1]
        top_clusters = self._clusters_to_dict(
            sorted_clusters,
            top_n_clusters,
            predicted_demand,
            corrected_demand,
            time_to_clusters,
            distance_to_clusters
        )
        pprint(top_clusters)
        return top_clusters

    def send_taxi(self, cluster):
        self._taxi_positions[cluster] += 1
        return True

    def taxi_taken(self, cluster):
        if self._taxi_positions[cluster] > 0:
            self._taxi_positions[cluster] -= 1
            return True
        else:
            return False

    def _clusters_to_dict(
            self,
            sorted_clusters,
            top_n_clusters,
            predicted_demand,
            corrected_demand,
            time_to_cluster,
            distances
    ):
        """Adds formats the data of the top clusters into a dictionary/json format."""
        top_clusters = {}
        for index in range(top_n_clusters):
            cluster = sorted_clusters[index]
            top_clusters[index] = {
                'cluster_nr': cluster,
                'predicted_demand': predicted_demand[cluster],
                'corrected_demand': corrected_demand[cluster],
                'time_to_cluster': time_to_cluster[cluster],
                'distance_to_cluster': distances[cluster],
                'other_taxis': self._taxi_positions[cluster]
            }
        return top_clusters

    def _calc_time_distance(self, taxi_position):
        time_to_clusters = np.zeros(shape=(self._n_clusters,))  # minutes
        distance_to_clusters = np.zeros(shape=(self._n_clusters,))  # km
        for cluster in range(self._n_clusters):
            time_to_clusters[cluster], distance_to_clusters[cluster] = \
                self._calculate_driving_time(taxi_position, self._cluster_centers[cluster])
        return time_to_clusters, distance_to_clusters

    def _calculate_driving_time(self, start_position, end_position):
        """Calculate driving times from one to the other position."""
        straight_real_distance_ratio = self._config["straight_real_distance_ratio"]
        distance = \
            geopy.distance.distance(start_position, end_position).km * straight_real_distance_ratio
        avg_speed_kmh = self._config["avg_speed_kmh"]
        driving_time = (distance/avg_speed_kmh)*60  # TODO: implement traffic based time
        return driving_time, distance

    def _correct_demand(self, predicted_demand, time_to_clusters):
        """Correct the predicted taxi demand based on taxi positions.
        Args:
            predicted_demand: A Numpy Array where each value represents the predicted demand for a cluster.

        Returns:
            Numpy Array where the demand is corrected based on the taxis in the cluster.
        """
        corrected_prediction = predicted_demand - self._taxi_positions
        driving_time_penalty = self._config["driving_time_penalty"]
        corrected_prediction = corrected_prediction - time_to_clusters * driving_time_penalty
        return corrected_prediction
