import '../styles/Header.css';
import React from 'react';
const Header = () => {
  return (
    <header>
      <div className="Application">
        <div className="header">
          <a id="logo-header" href="https://hungry-ptolemy-e44d65.netlify.app">
            <span className="site-name">José Manuel Castellano González</span>
            <span className="site-desc">Desarrollador software Junior</span>
          </a>
          <nav>
            <ul>
              <li>
                <a href="http://josemanuelcastellano.com">Inicio</a>
              </li>
              <li>
                <a href="https://hungry-ptolemy-e44d65.netlify.app">Sobre mí</a>
              </li>
              <li>
                <a href="https://awesome-bhaskara-ac0440.netlify.app">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
