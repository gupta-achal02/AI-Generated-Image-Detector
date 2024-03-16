import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import matplotlib as mpl
import matplotlib.pyplot as plt
from IPython.display import Image, display
import PIL

#Define the image size
img_size = (32, 32)

def get_img_array(img_path, size):
    img = image.load_img(img_path, target_size = size)
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis = 0)
    return img_array

# Function to classify an image
def classify_image(img_path, model):
    img_array = get_img_array(img_path, img_size)

    # Make predictions
    predictions = model.predict(img_array)
    class_index = int(predictions[0][0] >= 0.5)

    return class_names[class_index]

# Load the trained model
model = load_model("./model/MobileNet_model.h5")

# Define class names
class_names = ['AI-generated', 'Real']

# Provide the path to the image you want to classify
img_path = ""

# Classify the image
# predicted_class = classify_image(img_path, model)