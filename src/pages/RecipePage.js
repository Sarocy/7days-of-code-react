import React from "react";
import { useParams } from "react-router-dom";
import "../assets/styles/RecipePage.css";



const recipesData = {
    1: {
      title: "Lasanha de Garfield",
      description: "Uma deliciosa lasanha inspirada no Garfield.",
      image: "lasanha.png",
      steps: [
        "1. Pré-aqueça o forno a 180°C.",
        "2. Cozinhe a massa da lasanha conforme as instruções da embalagem.",
        "3. Prepare o molho bolonhesa: refogue cebola, alho e carne moída; adicione molho de tomate e tempere a gosto.",
        "4. Faça o molho branco: derreta manteiga, adicione farinha e leite, mexendo até engrossar. Tempere com sal e noz-moscada.",
        "5. Em uma travessa, monte camadas alternadas de massa, molho bolonhesa, molho branco e queijo.",
        "6. Finalize com queijo parmesão por cima.",
        "7. Leve ao forno por 30 minutos até gratinar.",
        "8. Sirva quente e aproveite!"
      ],
    },
    2: {
      title: "Cannoli de Poderoso Chefão",
      description: "Cannoli clássico inspirado no Poderoso Chefão.",
      image: "cannoli.png",
      steps: [
        "1. Misture farinha, açúcar e uma pitada de sal em uma tigela.",
        "2. Adicione manteiga e vinho branco até formar uma massa firme.",
        "3. Abra a massa em uma superfície enfarinhada e corte em círculos.",
        "4. Enrole os círculos em tubos de metal e frite em óleo quente até dourar.",
        "5. Deixe esfriar e retire os tubos.",
        "6. Prepare o recheio: misture ricota, açúcar, essência de baunilha e gotas de chocolate.",
        "7. Recheie os cannoli com a mistura de ricota usando um saco de confeiteiro.",
        "8. Polvilhe açúcar de confeiteiro por cima e sirva!"
      ],
    },
    3: {
      title: "Churros de Chaves",
      description: "Churros recheados e deliciosos do Chaves.",
      image: "churros.png",
      steps: [
        "1. Em uma panela, misture água, açúcar, sal e manteiga e leve ao fogo até ferver.",
        "2. Adicione farinha de trigo de uma vez e mexa vigorosamente até formar uma massa lisa.",
        "3. Deixe a massa esfriar um pouco e coloque em um saco de confeiteiro com bico estrela.",
        "4. Aqueça o óleo em uma panela e frite os churros até dourar.",
        "5. Recheie os churros com doce de leite usando um bico de confeiteiro.",
        "6. Polvilhe com açúcar e canela.",
        "7. Sirva quente!"
      ],
    },
    4: {
      title: "Ratatouille de Ratatouille",
      description: "Ratatouille clássico inspirado na animação.",
      image: "ratatouille.png",
      steps: [
        "1. Corte berinjela, abobrinha, tomate e pimentão em rodelas finas.",
        "2. Em uma assadeira, espalhe molho de tomate temperado como base.",
        "3. Arrume as rodelas de legumes em fileiras alternadas.",
        "4. Tempere com sal, pimenta, alho picado e ervas de Provence.",
        "5. Regue com azeite de oliva.",
        "6. Cubra com papel alumínio e leve ao forno a 180°C por 30 minutos.",
        "7. Retire o papel e asse por mais 10 minutos para dourar.",
        "8. Sirva quente ou frio."
      ],
    },
    5: {
      title: "Donuts de Simpsons",
      description: "Donuts coloridos como os de Homer Simpson.",
      image: "donuts.png",
      steps: [
        "1. Misture farinha, açúcar, fermento e sal em uma tigela.",
        "2. Adicione leite morno, manteiga derretida e ovos, misturando até formar uma massa.",
        "3. Deixe a massa descansar por 1 hora até dobrar de tamanho.",
        "4. Abra a massa e corte em formatos de donuts.",
        "5. Frite os donuts em óleo quente até dourar.",
        "6. Prepare a cobertura: misture açúcar de confeiteiro, leite e corante alimentar.",
        "7. Mergulhe os donuts na cobertura e adicione confeitos coloridos.",
        "8. Deixe secar e sirva!"
      ],
    },
    6: {
      title: "Waffles de Stranger Things",
      description: "Waffles icônicos inspirados em Stranger Things.",
      image: "waffles.png",
      steps: [
        "1. Misture farinha, açúcar, fermento e sal em uma tigela.",
        "2. Em outra tigela, bata ovos, leite e manteiga derretida.",
        "3. Combine os ingredientes secos e líquidos até formar uma massa homogênea.",
        "4. Preaqueça a máquina de waffles e unte com manteiga.",
        "5. Despeje a massa na máquina e asse até dourar.",
        "6. Sirva com mel, frutas ou calda de chocolate.",
        "7. Aproveite os waffles quentinhos!"
      ],
    },
  };
  

  const RecipePage = () => {
    const { id } = useParams();
    const recipe = recipesData[id];
  
    if (!recipe) return <h2>Receita não encontrada!</h2>;
  
    return (
      <div className="recipe-page">
        {/* Cabeçalho do RecipePage */}
        <div className="recipe-header">
          <div className="recipe-info">
            <h2 className="recipe-special">Chef's Special</h2>
            <h1 className="recipe-title">{recipe.title}</h1>
            <p className="recipe-description">{recipe.description}</p>
          </div>
          <div className="recipe-image">
            <img src={require(`../assets/images/${recipe.image}`)} alt={recipe.title} />
          </div>
        </div>
  
        {/* Passo a passo */}
        <div className="recipe-steps">
          <h2>Modo de Preparo</h2>
          <ul>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

export default RecipePage;