"""Use the ML model to predict the taxi demand."""
import numpy as np


class MLInterface:
    def __init__(self, config):
        self._prediction = [0, np.zeros(shape=(1,))]
        self._cluster_centers_data = None
        self._config = config

    def predict_demand(self, timestamp):
        current_bin = self._get_bin(timestamp)
        if current_bin != self._prediction[0]:
            self._predict(current_bin)
        return self._prediction[1]

    def _get_bin(self, timestamp):
        """Returns unixtime of the start of the current bin.

        Example: if have a 10min bin-length and input 2:26:13PM in unixtime we get 2:20:00PM in unixtime.
        """
        return timestamp - (timestamp % self._config["time_bin_length"])

    def _predict(self, current_bin):
        """Use machine learning model to predict taxi  demand.

        Returns: Numpy array where the length is equal to the number of clusters"""
        prediction = np.random.randint(100, size=1000)
        # TODO: implement actual prediction interface
        self._prediction = [current_bin, prediction]

    @property
    def cluster_centers(self):
        """Returns coordinates for a given cluster as a tuple of two floats."""
        if self._cluster_centers_data is None:
            self._cluster_centers_data = np.load(self._config["path_cluster_centers"])
        return self._cluster_centers_data

