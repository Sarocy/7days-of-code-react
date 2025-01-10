import React from "react";
import "../assets/styles/Footer.css";

const Footer = () => {
  return (
    <footer id="contato" className="footer">
      <div className="footer-container">
        <div className="footer-section brand">
          <h3>COOK THE CLASSICS</h3>
        </div>

        <div className="footer-section contacts">
          <h4>Contatos</h4>
          <p>E-mail: contato@cooktheclassics.com</p>
          <p>Telefone: +55 (XX) XXXXX-XXXX</p>
        </div>

        <div className="footer-section social">
          <h4>Siga:</h4>
          <p>Instagram: @cooktheclassics</p>
          <p>Facebook: /cooktheclassics</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Cook the Classics. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
