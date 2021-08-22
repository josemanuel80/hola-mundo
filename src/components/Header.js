import '../styles/Header.css';
import React from 'react';
const Header = () => {
  return (
    <header>
      <div className="Application">
        <div className="header">
          <a id="logo-header" href="/Bio">
            <span className="site-name">José Manuel Castellano González</span>
            <span className="site-desc">Desarrollador software Junior</span>
          </a>
          <nav>
            <ul>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/bio">Sobre mí</a>
              </li>
              <li>
                <a href="/contact">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
