import React from "react";
import "../assets/styles/AboutSection.css";
import moviesImage from "../assets/images/filmes.png"; 

const AboutSection = () => {
  return (
    <section  id="sobre" className="about-section">

      <div className="image-container">
        <img src={moviesImage} alt="Galeria de cenas" />
      </div>

     
      <div className="about-text">
        <h2>
          O que <span className="highlight">somos?</span>
        </h2>
        <p>
          Se você assiste a filmes ou séries e sempre <br/>
          fica com vontade de experimentar as <br/>
          comidas incríveis da telona, este <br/>
          é o lugar certo!
        </p>
        <p>
          Transforme cenas icônicas <br/>
          em pratos reais e mate a curiosidade <br/>
          (e a fome) de provar os sabores <br/>
          do cinema!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
