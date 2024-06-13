import React from "react";
import vg from "../assets/2.webp";
import {
  IoIosGitBranch,
  IoIosGitMerge
} from "react-icons/io";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>AI Image detector</h1>
          <p>
            Unlocking AI's Secrets: Distinguishing Real from Generated with Ease
          </p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
          We can help you determine whether an image is AI-generated or real. 
          Our highly accurate CNN model can assist you with this.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Why we need this?</h1>
          <p>
            Welcome! The rapid advancements of image generation models, 
            especially text-to-image-based image generation models, have started 
            a new chapter in how we understand visual information, blurring 
            the lines between what is real and what is synthetic. Moreover, 
            the propagation of AI-generated images across industries, coupled 
            with the easier accessibility of generative models, raises concerns 
            about misinformation and ethical implications. With this project, 
            we aim tackle this challenge head-on with an innovative solution. 
            Our application uses a lightweight Convolutional Neural Network 
            (CNN) architecture. This architecture achieves exceptional accuracy 
            while significantly reducing computational demands. The objective 
            was to create a CNN model that accurately captures distinguishing 
            features and patterns in AI-generated images, enabling precise 
            distinction from regular images. To achieve this, we trained our 
            model on a diverse dataset called CIFAKE.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Source Code</h1>
          <article>
              <div
                style={{
                  animationDelay: "0.5s",
                }}
              >
                <a href="https://github.com/gupta-achal02/AI-Generated-Image-Detection" target="_blank">
                  <IoIosGitBranch />
                  <p>Model</p>
                </a>
              </div>
              <div
                style={{
                  animationDelay: "0.5s",
                }}
              >
                <a href="https://github.com/gupta-achal02/AI-Generated-Image-Detector" target="_blank">
                  <IoIosGitMerge />
                  <p>App</p>
                </a>
              </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
