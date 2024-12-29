import React from 'react';
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import AboutSection from "./components/AboutSection";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="background-blur">
        <div className="blur-circle blur-top"></div>
        <div className="blur-circle blur-right1"></div>
        <div className="blur-circle blur-left1"></div>
      </div>
      
      <>
        <Header />
        <MainSection />
        <AboutSection />
      </>
    </div>
  );
}

export default App;

