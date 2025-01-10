import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Header.css";

const Header = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <h3 className="logo" onClick={goToHome} style={{ cursor: "pointer" }}>
        COOK THE CLASSICS
      </h3>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#sobre" onClick={(e) => handleScroll(e, "sobre")}>sobre</a>
          </li>
          <li>
            <a href="#receitas" onClick={(e) => handleScroll(e, "recipes-section")}>receitas</a>
          </li>
          <li>
            <a href="#depoimentos" onClick={(e) => handleScroll(e, "depoimentos")}>depoimentos</a>
          </li>
          <li>
            <a href="#contato" onClick={(e) => handleScroll(e, "contato")}>contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
