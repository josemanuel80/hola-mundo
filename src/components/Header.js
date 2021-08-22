import '../styles/Header.css';
const Header = () => {
  return (
    <div className="Application">
      <div className="header">
        <span className="site-name">José Manuel Castellano González</span>
        <span className="site-desc">Desarrollador software Junior</span>

        <nav>
          <ul>
            <li>
              <a href="http://josemanuelcastellano.com">Inicio</a>
            </li>
            <li>
              <a href="http://josemanuelcastellano.com/bio">Sobre mí</a>
            </li>
            <li>
              <a href="http://josemanuelcastellano.com/contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;
