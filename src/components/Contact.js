import { useHistory } from 'react-router-dom';
//import Contact from './Contact.js';
import Info from './Info.js';
import playa from '../assets/playa2.png';
import home from '../assets/home.svg';
import email from '../assets/email.svg';
import crud from '../assets/CRUD2.png';
import perfil from '../assets/Perfil.png';
import '../style/Home.css';
const Contact = () => {
  const Home = () => {};
  const history = useHistory();
  const info = () => {
    history.push('/Info');
  };
  const inicio = () => {
    history.push('/');
  };
  const mail = () => {
    history.push('/contact');
  };
  return (
    <div className="header">
      <div className="izquierda">
        <div className="imagen">
          <img
            className="perfil"
            src={perfil}
            onClick={info}
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
          onClick={mail}
        />
      </div>
    </div>
  );
};
export default Contact;
