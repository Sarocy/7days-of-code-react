import React from "react";
import "../assets/styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">COOK THE CLASSICS</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#sobre">sobre</a></li>
          <li><a href="#receitas">receitas</a></li>
          <li><a href="#depoimentos">depoimentos</a></li>
          <li><a href="#contato">contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;