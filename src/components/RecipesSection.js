import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/RecipesSection.css";

const recipes = [
  {
    id: 1,
    name: "Lasanha de Garfield",
    image: require("../assets/images/lasanha.png"),
  },
  {
    id: 2,
    name: "Cannoli de Poderoso Chefão",
    image: require("../assets/images/cannoli.png"),
  },
  {
    id: 3,
    name: "Churros de Chaves",
    image: require("../assets/images/churros.png"),
  },
  {
    id: 4,
    name: "Ratatouille de Ratatouille",
    image: require("../assets/images/ratatouille.png"),
  },
  {
    id: 5,
    name: "Donuts de Simpsons",
    image: require("../assets/images/donuts.png"),
  },
  {
    id: 6,
    name: "Waffles de Stranger Things",
    image: require("../assets/images/waffles.png"),
  },
];

const RecipesSection = () => {
  return (
    <section id="recipes-section" className="recipes-section">
      <h2 className="section-title">Receitas</h2>
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-image">
              <img src={recipe.image} alt={recipe.name} />
            </div>
            <div className="recipe-details">
              <h3>{recipe.name}</h3>
              <Link to={`/recipe/${recipe.id}`}>
                <button className="access-button">Acessar</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipesSection;
