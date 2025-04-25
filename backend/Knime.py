# import pandas as pd
# from sklearn.model_selection import train_test_split
# from sklearn.svm import SVC
# from sklearn.metrics import accuracy_score
# from sklearn.preprocessing import OneHotEncoder
# import pymongo

# # Read data from initial CSV file
# initial_data = pd.read_csv('C:\\Users\\shiva\\OneDrive\\Desktop\\sr\\AyurBot.csv')
# print("Initial data:")
# print(initial_data)

# # Assuming your target variable is in the last column
# X_initial = initial_data.drop(columns=['PRAKRITI'])  # Features (all columns except the 'PRAKRITI' column)
# y_initial = initial_data['PRAKRITI']  # Target variable ('PRAKRITI' column)

# # Perform one-hot encoding for categorical variables in the initial data
# categorical_cols_initial = X_initial.select_dtypes(include=['object']).columns
# one_hot_encoder = OneHotEncoder(sparse_output=False, handle_unknown='ignore')  # Initialize the OneHotEncoder
# X_initial_encoded = one_hot_encoder.fit_transform(X_initial[categorical_cols_initial])

# # Get feature names for one-hot encoded columns
# feature_names_initial = one_hot_encoder.get_feature_names_out(categorical_cols_initial)

# # Create a DataFrame for the one-hot encoded data
# X_initial_encoded_df = pd.DataFrame(X_initial_encoded, columns=feature_names_initial)

# # Combine the one-hot encoded data with the non-categorical columns
# X_initial_processed = pd.concat([X_initial.drop(columns=categorical_cols_initial), X_initial_encoded_df], axis=1)

# # Split the initial data into training (70%) and testing (30%) sets
# X_train_initial, X_test_initial, y_train_initial, y_test_initial = train_test_split(X_initial_processed, y_initial, train_size=0.85, random_state=None)

# # Initialize SVM classifier with specified parameters
# svm_classifier = SVC(C=1, kernel='poly', degree=1, coef0=1, gamma=1)

# # Train the SVM classifier using the initial data
# svm_classifier.fit(X_train_initial, y_train_initial)

# # Predict on the test set using the initial data
# y_pred_initial = svm_classifier.predict(X_test_initial)

# # Calculate accuracy using the initial data
# accuracy_initial = accuracy_score(y_test_initial, y_pred_initial)
# print("Accuracy using initial data:", accuracy_initial)

# # Connection string URI
# connection_uri = "mongodb+srv://shivaprasadshetty112:Shivu2002@cluster0.1wqnh2r.mongodb.net/ayurbot1"

# # Establish a connection to MongoDB using the connection string URI
# client = pymongo.MongoClient(connection_uri)

# # Specify the name of the database
# db = client["ayurbot1"]  

# # Specify the collection within the database
# collection = db["Prakriti"]  

# # Get the most recent document from the collection
# recent_document = collection.find_one(sort=[('_id', pymongo.DESCENDING)])

# # Use the entire document as your JSON data
# new_data = recent_document

# # Store the 'Email' key value in a variable and remove the 'Email', '_id', and 'PRAKRITI' keys and their values
# Email = new_data.pop("Email", None)
# new_data.pop("_id", None)
# new_data.pop("PRAKRITI", None)

# # Convert dictionary to DataFrame
# df_new_data = pd.DataFrame([new_data])

# # Apply the same one-hot encoding to the new JSON data
# X_new_data_encoded = one_hot_encoder.transform(df_new_data[categorical_cols_initial])

# # Create a DataFrame for the one-hot encoded new data
# X_new_data_encoded_df = pd.DataFrame(X_new_data_encoded, columns=feature_names_initial)

# # Combine the one-hot encoded new data with the non-categorical columns
# X_new_data_processed = pd.concat([df_new_data.drop(columns=categorical_cols_initial), X_new_data_encoded_df], axis=1)

# # Predict target values for the new JSON data
# y_pred_new_data = svm_classifier.predict(X_new_data_processed)

# print("Predicted values for new JSON data:", y_pred_new_data)

# # Create a new JSON data with just the email and the predicted value
# new_json_data = {'Email': Email, 'Predicted_PRAKRITI': y_pred_new_data[0]}

# print("New JSON data with email and predicted value:")
# print(new_json_data)

# # Specify the collection within the database to insert the new JSON data
# output_collection = db["Outputs"]  # Collection to insert the new JSON data

# # Insert the new JSON data into the collection
# output_collection.insert_one(new_json_data)

# # Confirm that the data has been inserted
# print("Data inserted successfully.")

# # Close the MongoDB connection
# client.close()

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import OneHotEncoder
import pymongo

# Read data from initial CSV file
initial_data = pd.read_csv('C:\\Users\\shiva\\OneDrive\\Desktop\\sr\\AyurBot.csv')
print("Initial data:")
print(initial_data)

# Assuming your target variable is in the last column
X_initial = initial_data.drop(columns=['PRAKRITI'])  # Features (all columns except the 'PRAKRITI' column)
y_initial = initial_data['PRAKRITI']  # Target variable ('PRAKRITI' column)

# Perform one-hot encoding for categorical variables in the initial data
categorical_cols_initial = X_initial.select_dtypes(include=['object']).columns
one_hot_encoder = OneHotEncoder(sparse_output=False, handle_unknown='ignore')  # Initialize the OneHotEncoder
X_initial_encoded = one_hot_encoder.fit_transform(X_initial[categorical_cols_initial])

# Get feature names for one-hot encoded columns
feature_names_initial = one_hot_encoder.get_feature_names_out(categorical_cols_initial)

# Create a DataFrame for the one-hot encoded data
X_initial_encoded_df = pd.DataFrame(X_initial_encoded, columns=feature_names_initial)

# Combine the one-hot encoded data with the non-categorical columns
X_initial_processed = pd.concat([X_initial.drop(columns=categorical_cols_initial), X_initial_encoded_df], axis=1)

# Split the initial data into training (70%) and testing (30%) sets
X_train_initial, X_test_initial, y_train_initial, y_test_initial = train_test_split(X_initial_processed, y_initial, train_size=0.85, random_state=None)

# Initialize SVM classifier with specified parameters
svm_classifier = SVC(C=1, kernel='poly', degree=1, coef0=1, gamma=1)

# Train the SVM classifier using the initial data
svm_classifier.fit(X_train_initial, y_train_initial)

# Predict on the test set using the initial data
y_pred_initial = svm_classifier.predict(X_test_initial)

# Connection string URI
connection_uri = "mongodb+srv://shivaprasadshetty112:Shivu2002@cluster0.1wqnh2r.mongodb.net/ayurbot1"

# Establish a connection to MongoDB using the connection string URI
client = pymongo.MongoClient(connection_uri)

# Specify the name of the database
db = client["ayurbot1"]  

# Specify the collection within the database
collection = db["Prakriti"]  

# Get the most recent document from the collection
recent_document = collection.find_one(sort=[('_id', pymongo.DESCENDING)])

# Use the entire document as your JSON data
new_data = recent_document

# Store the 'Email' key value in a variable and remove the 'Email', '_id', and 'PRAKRITI' keys and their values
Email = new_data.pop("Email", None)
new_data.pop("_id", None)
new_data.pop("PRAKRITI", None)

# Convert dictionary to DataFrame
df_new_data = pd.DataFrame([new_data])

# Apply the same one-hot encoding to the new JSON data
X_new_data_encoded = one_hot_encoder.transform(df_new_data[categorical_cols_initial])

# Create a DataFrame for the one-hot encoded new data
X_new_data_encoded_df = pd.DataFrame(X_new_data_encoded, columns=feature_names_initial)

# Combine the one-hot encoded new data with the non-categorical columns
X_new_data_processed = pd.concat([df_new_data.drop(columns=categorical_cols_initial), X_new_data_encoded_df], axis=1)

# Predict target values for the new JSON data
y_pred_new_data = svm_classifier.predict(X_new_data_processed)

print("Predicted values for new JSON data:", y_pred_new_data)

# Create a new JSON data with just the email and the predicted value
new_json_data = {'Email': Email, 'Predicted_PRAKRITI': y_pred_new_data[0]}

print("New JSON data with email and predicted value:")
print(new_json_data)

# Specify the collection within the database to insert the new JSON data
output_collection = db["Outputs"]  # Collection to insert the new JSON data

# # Insert the new JSON data into the collection
# output_collection.insert_one(new_json_data)

# # Confirm that the data has been inserted
# print("Data inserted successfully.")

# # Close the MongoDB connection
# client.close()



# Check if there's an existing record with the email
existing_record = output_collection.find_one({'Email': Email})

if existing_record:
    # Update existing record or delete and insert new one
    output_collection.replace_one({'Email': Email}, new_json_data)
    print("Existing record updated.")
else:
    # Insert the new JSON data into the collection
    output_collection.insert_one(new_json_data)
    print("New record inserted.")

# Confirm that the data has been inserted or updated
print("Data operation completed successfully.")

# Close the MongoDB connection
client.close()