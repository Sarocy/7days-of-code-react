import React from 'react';
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="background-blur">
        <div className="blur-circle blur-top"></div>
        <div className="blur-circle blur-right1"></div>
      </div>
      
      <>
        <Header />
        <MainSection />
      </>
    </div>
  );
}

export default App;

