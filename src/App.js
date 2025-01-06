import React from 'react';
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import AboutSection from "./components/AboutSection";
import RecipesSection from "./components/RecipesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="background-blur">
        <div className="blur-circle blur-top"></div>
        <div className="blur-circle blur-right1"></div>
        <div className="blur-circle blur-left1"></div>
        <div className="blur-circle blur-right2"></div>
        <div className="blur-circle blur-left2"></div>
      </div>
      
      <>
        <Header />
        <MainSection />
        <AboutSection />
        <RecipesSection />
        <TestimonialsSection />
      </>
    </div>
  );
}

export default App;

