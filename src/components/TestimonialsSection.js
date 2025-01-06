import React from "react";
import "../assets/styles/TestimonialsSection.css";
import depoimentos from "../assets/images/depoimentos.png"; 
import estrelas from "../assets/images/estrelas.png"; 

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">Depoimentos</h2>

      <div className="testimonials-content">
        <div className="testimonial-image">
          <img src={depoimentos} alt="Depoimentos" />
        </div>

        <div className="testimonial-cards">
          <div className="testimonial-card">
            <img className="stars" src={estrelas} alt="estrelas" />
            <p>
              "Nunca imaginei que cozinhar nostálgicas refeições dos filmes de
              infância seria tão delicioso e divertido! As receitas desse site
              me fizeram revisitar cenas dos meus filmes favoritos. Cada prato é
              uma viagem no tempo." - Sarah Ocy, Teresina
            </p>
          </div>

          <div className="testimonial-card">
            <img className="stars" src={estrelas} alt="estrelas" />
            <p>
              "Sou apaixonado por cinema e culinária, e encontrar esse site foi
              como ganhar um tesouro gastronômico! Sempre quis saber como seria
              provar o Ratatouille ou os waffles de Stranger Things. A atenção
              aos detalhes e o sabor das receitas são incríveis!" - Pedro Alves,
              Belo Horizonte
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;