# 7 Days of Code: React 🥗🍿🎥

## 💻 Dia 07: Adicionando a Funcionalidade de Navegação

### 🚀 O Desafio de Hoje

No sétimo e último dia do desafio, finalizamos o projeto ao adicionar funcionalidade de navegação entre páginas usando o **React Router**. Aqui implementamos uma página detalhada para cada receita, permitindo que os usuários vejam as instruções de preparo por meio das seguintes ações:
### 1. Implementação do React Router
Instalamos o **React Router** para gerenciar a navegação entre páginas:
  ```bash
  npm install react-router-dom
  ```

Configuramos o roteamento no arquivo `App.js`:
  - A rota `/` exibe a página inicial com todas as seções (Main, About, Recipes, Testimonials).
  - A rota `/recipe/:id` exibe a página detalhada de cada receita.

### 2. Criação da Página de Receita (RecipePage)
Criamos o componente **RecipePage** que exibe o título, descrição e imagem da receita, além de uma lista de etapas detalhadas do preparo.

### 3. Atualização do RecipesSection
Adicionamos links em cada card de receita usando o componente `Link` do React Router, permitindo que o usuário navegue para a página detalhada ao clicar no botão "Acessar".


### 4. Estrutura do Projeto
Atualizamos a estrutura de pastas para incluir o componente de navegação e a página de receitas:
  ```
  src/
  ├── assets/
  │   ├── images/
  │   ├── styles/
  │       ├── AboutSection.css
  │       ├── Footer.css
  │       ├── Header.css
  │       ├── MainSection.css
  │       ├── RecipesSection.css
  │       ├── TestimonialsSection.css
  │       └── RecipePage.css
  ├── components/
  │   ├── AboutSection.js
  │   ├── Footer.js
  │   ├── Header.js
  │   ├── MainSection.js
  │   ├── RecipesSection.js
  │   └── TestimonialsSection.js
  ├── pages/
  │   └── RecipePage.js
  ├── App.css
  ├── App.js
  └── index.js
  ```



## Resultado Esperado


