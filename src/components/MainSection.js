import React from "react";
import monitorImage from "../assets/images/monitor.png"; 
import "../assets/styles/MainSection.css";

const MainSection = () => {
  return (
    <section className="main">
      <div className="main-text">
        <h2>Descobrindo <br/>o sabor dos <br/>filmes</h2>
        <p>Receitas que transformam cenas de cinema em sabores reais!</p>
        <button className="cta-button">Vamos lá!</button>
      </div>
      <div className="main-image">
        <img src={monitorImage} alt="Comidas saindo de um monitor" />
      </div>
    </section>
  );
};

export default MainSection;