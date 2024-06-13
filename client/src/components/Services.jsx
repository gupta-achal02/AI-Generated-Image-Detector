import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Services.scss";

function Services() {
  const [data, setData] = useState("");
  const [prediction, setPrediction] = useState("Upload image to predict");
  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.message);
      });
  }, []);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPrediction("Processing...");

    const formData = new FormData();
    formData.append("file", uploadedFile);

    try {
      axios.post("http://localhost:5000/upload", formData).then((res) => {
        console.log(res.data.message);
        setPrediction(res.data.message);
      });
      alert("File uploaded successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  return (
    <div className="service-main">
      <h1 className="services-title">
        <span className="gradient-text">
          Unveiling the Boundaries of Reality:
        </span>
        <br className="br-1" /> Detect Real or Synthethic
      </h1>
      <p className="services-description">Upload an image file to detect.</p>
      <form onSubmit={handleSubmit}>
        <div className="services-file-upload">
          <label htmlFor="file-upload" className="services-file-input">
            <svg
              className="services-upload-icon"
              fill="blue"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="services-file-text">Select a file</span>
            <input
              type="file"
              name="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </div>
        <span className="services-file-info">
          {uploadedFile
            ? `File Uploaded: ${uploadedFile.name}`
            : "No file uploaded"}
        </span>

        <div className="services-submit-button">
          <button className="services-predict-button" type="submit">
            PREDICT
          </button>
        </div>
      </form>

      <div className="services-result">
        <span className="services-result-text">
          Detected Image is: {prediction}
        </span>
      </div>
    </div>
  );
}

export default Services;
