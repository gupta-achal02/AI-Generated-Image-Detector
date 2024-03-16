from flask import Flask, request, jsonify
from flask_cors import CORS
import os

# Importing deps for image prediction
from tensorflow.keras.preprocessing import image
import numpy as np
from tensorflow.keras.models import load_model
from classifier import classify_image

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Load the trained model
model = load_model("./model/MobileNet_model.h5")

# Define class names
class_names = ['AI-generated', 'Real']

@app.route("/")
def home():
    return {"message": "Hello from backend"}

@app.route("/upload", methods=['POST'])
def upload():
    file = request.files['file']
    file.save(file.filename)

    # Load the image to predict
    img_path = file.filename

    # Classify the image
    predicted_class = classify_image(img_path, model)

    if os.path.exists(file.filename):
        os.remove(file.filename)
    
    return jsonify({"message": predicted_class})


if __name__ == '__main__':
    app.run(debug=True)