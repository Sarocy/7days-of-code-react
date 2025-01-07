import React from 'react';
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import AboutSection from "./components/AboutSection";
import RecipesSection from "./components/RecipesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import RecipePage from "./pages/RecipePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
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
          <Routes>
            <Route path="/" element={
              <>
                <MainSection />
                <AboutSection />
                <RecipesSection />
                <TestimonialsSection />
              </>
            } />
            <Route path="/recipe/:id" element={<RecipePage />} /> {/* Rota para RecipePage */}
          </Routes>
          <Footer />
        </>
      </div>
    </Router>
  );
}

export default App;

