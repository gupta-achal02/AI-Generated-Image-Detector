# Use a smaller base image
FROM python:3.10-slim

# Set up a working directory in the container for your application
WORKDIR /app

# Copy both requirements.txt and all other files
COPY . .

# Install any Python dependencies listed in 'requirements.txt'
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port that your app will run on 
EXPOSE 5000

# Set the command to run your application
CMD ["python", "./server.py"]
