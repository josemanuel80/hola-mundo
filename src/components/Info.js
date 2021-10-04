import { useHistory } from 'react-router-dom';

import home from '../assets/home.svg';
import email from '../assets/email.svg';
import perfil from '../assets/Perfil.png';
import '../style/Home.css';

const Info = () => {
  const history = useHistory();
  const inicio = () => {
    history.push('/');
  };
  const Contact = () => {
    history.push('/Contact');
  };
  return (
    <div className="header">
      <div className="izquierda">
        <div className="imagen">
          <img
            className="perfil"
            src={perfil}
            onClick={Info}
            alt="nada"
            title="José Manuel"
          />
        </div>
        <div className="nombre"></div>
      </div>
      <div className="centro">
        <img
          src={home}
          alt="nada"
          title="Inicio"
          className="home"
          onClick={inicio}
        />
      </div>
      <div className="derecha">
        <img
          src={email}
          alt="nada"
          title="Contacto"
          className="mail"
          onClick={Contact}
        />
      </div>
    </div>
  );
};
export default Info;
