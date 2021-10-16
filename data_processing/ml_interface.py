"""Use the ML model to predict the taxi demand."""
import numpy as np
import os.path


class MLInterface:
    def predict_demand(self, config):
        #prediction = np.load(r"C:\Users\Philipp\Downloads\2016-01_1000_10.npy")
        prediction = np.random.randint(100, size=1000)
        filename =
        path_to_prediction = os.path.join(config["path_to_prediction_directory"], filename + ".npy")
        os.path.isfile(fname)
        return prediction


    def predict(self):
        pass

    def cluster_centers(self, config):
        """Returns coordinates for a given cluster as a tuple of two floats."""
        return np.load(config["path_to_cluster_centers"])
