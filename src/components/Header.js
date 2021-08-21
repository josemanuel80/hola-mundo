import '../styles/Header.css';
const Header = () => {
  return (
    <div className="Application">
      <div className="header">
        <span class="site-name">José Manuel Castellano González</span>
        <span class="site-desc">Desarrollador software Junior</span>

        <nav>
          <ul>
            <li>
              <a href="josemanuelcastellano.com">Inicio</a>
            </li>
            <li>
              <a href="josemanuelcastellano.com/bio">Sobre mí</a>
            </li>
            <li>
              <a href="josemanuelcastellano.com/contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;
