import { useHistory } from 'react-router-dom';
import home from '../assets/home.svg';
import email from '../assets/email.svg';
import perfil from '../assets/Perfil.png';
import '../style/Home.css';
import '../style/Contact.css';
const Contact = () => {
  const history = useHistory();
  const info = () => {
    history.push('/Info');
  };
  const inicio = () => {
    history.push('/');
  };

  return (
    <>
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
          <img src={email} alt="nada" title="Contacto" className="mail" />
        </div>
      </div>
      <div className="contact">
        <p className="correo">Email de contacto:</p>
        <p className="gmail">castellanogonzalezjosemanuel@gmail.com</p>
      </div>
    </>
  );
};
export default Contact;
