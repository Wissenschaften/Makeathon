# WhereToGo - A Taxi Recommendation System

## Machine Learning
We tried different approaches for the ML model:
- Taxi_Prediction.ipynb: uses a Linear Regressor to predict the pickups and is used for the demo data
- Taxi_Prediction_GCNN.ipynb: Prediction using a graph convolutional neural network (slightly worse performance)
- Taxi_Prediction_Ensemble_Classifier.ipynb: Combination of a periodic classifier (long-term) and a time-series classifier (correcting for short-term fluctuations on top of the base pattern predicted by the periodic classifyer) (slightly worse performance).
- Data_Cleaning.ipynb: Used to clean the data


## Data Processing
Makes recommendations where to go based on the demand prediction.
We take for now a taxi distribution that is based on the predicted pickup demand and adjusted with random values.

dummy_test.py is the entry point for the data_processing. It takes predicted data for now.

## Website

https://wheretogo.maschinelleslernen.com/
![](website_ss_recommendations.jpg?raw=true "Optional Title")

![](website_ss.jpg?raw=true "Optional Title")