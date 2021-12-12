import { useHistory } from 'react-router-dom';
import home from '../assets/home.svg';
import email from '../assets/email.svg';
import perfil from '../assets/Perfil.png';
import '../style/Home.css';
import '../style/Info.css';

const Info = () => {
  const history = useHistory();
  const inicio = () => {
    history.push('/');
  };
  const Contact = () => {
    history.push('/Contact');
  };
  return (
    <div className="wrapper">
      <div className="header">
        <div className="izquierda">
          <div className="imagen">
            <img
              className="perfil"
              src={perfil}
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
      <div className="descripcion">
        <p className="name">Jose Manuel Castellano Gonzalez</p>
        <p className="bio">
          Soy un chico de Algeciras al que le apasiona la informática y la
          programación. He vivido la informática desde la llegada de los
          ordenadores personales y desde entonces he aprendido a programar y ha
          sido mi pasión. Mis estudios son de Ingeniería de Telecomunicaciones
          sin terminar, pero la parte software y de programación la tengo
          terminada. Realicé un bootcamp de Sofware Engineering en General
          Assembly para lo que me preparé para el mundo laboral de una buena
          forma. Mis conocimientos para el desarrollo web son amplios aunque
          sigo practicando y mejorando todos los dias. Las tecnologías que
          practico son entre otras Javascipt, CSS, HTML, React, Node, MongoDB,
          Express y Bootstrap.
        </p>
      </div>
    </div>
  );
};
export default Info;
