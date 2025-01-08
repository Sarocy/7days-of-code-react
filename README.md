# 7 Days of Code: React 🥗🍿🎥

## 💻 Dia 04: Criação da Terceira Seção da Página

### 🚀 O Desafio de Hoje

No quarto dia do desafio, criamos a seção **Receitas**, onde listamos pratos icônicos inspirados em filmes e séries. Essa seção é interativa e apresenta cada receita com imagem, nome e um botão para acesso, tornando a experiência do usuário mais rica e divertida.

Criamos o Componente RecipesSection que contém um título "Receitas" e um grid de cards que exibe a imagem e o nome da receita, além de um botão "acessar". Aqui foi possível explorar alguns conceitos como a criação de um array de objetos para armazenar os dados de cada receita e do método `map()`, utilizado para renderizar dinamicamente os cards de receitas. 

### 1. Estrutura do Projeto
Atualizamos a estrutura de pastas para incluir os arquivos relacionados à nova seção:
  ```
  src/
  ├── assets/
  │   ├── images/
  │   │   ├── cannoli.png
  │   │   ├── churros.png
  │   │   ├── donuts.png
  │   │   ├── filmes.png
  │   │   ├── lasanha.png
  │   │   ├── ratatouille.png
  │   │   └── waffles.png
  │   └── styles/
  │       ├── AboutSection.css
  │       ├── Header.css
  │       ├── MainSection.css
  │       └── RecipesSection.css
  ├── components/
  │   ├── AboutSection.js
  │   ├── Header.js
  │   ├── MainSection.js
  │   └── RecipesSection.js
  ├── App.css
  ├── App.js
  └── index.js
  ```

## Resultado Esperado
![image](https://github.com/user-attachments/assets/630b20ad-6679-4290-8465-ce8a6f765ad1)
