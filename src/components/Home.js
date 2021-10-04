import { useHistory } from 'react-router-dom';
import Contact from './Contact.js';
import Info from './Info.js';
import playa from '../assets/playa2.png';
import home from '../assets/home.svg';
import email from '../assets/email.svg';
import crud from '../assets/CRUD2.png';
import perfil from '../assets/Perfil.png';
import snake from '../assets/Snake.png';
import notas from '../assets/Notas.png';
import '../style/Home.css';

const Home = () => {
  const history = useHistory();
  const info = () => {
    history.push('/Info');
  };
  const inicio = () => {
    history.push('/');
  };
  const Contact = () => {
    history.push('/Contact');
  };
  return (
    <div className="App">
      <div className="wrapper">
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
              onClick={Contact}
            />
          </div>
        </div>
        <div className="panel">
          <div class="portafolio">
            <h1>Portafolio</h1>
            <h4>José Manuel Castellano Gonzalez</h4>
            <h4>Desarrollador software Junior</h4>
          </div>
          <div className="imagenes">
            <div className="cuadro">
              <div className="img1">
                <a href="https://sleepy-northcutt-f36bee.netlify.app">
                  <img
                    src={playa}
                    alt="nada"
                    title="Playas"
                    className="playa"
                  />
                </a>
              </div>
              <div className="text">
                <p className="titulo">Buscador de playas</p>
                <h4>
                  Introduzca el nombre de cualquier ciudad de España y si tiene
                  playa se mostrará con algunos detalles.
                </h4>
              </div>
            </div>
            <div className="cuadro">
              <div className="img1">
                <a href="https://focused-mirzakhani-101c93.netlify.app">
                  <img className="crud" src={crud} alt="nada" title="CRUD" />
                </a>
              </div>
              <div className="text">
                <p className="titulo">Aplicación CRUD</p>
                <h4>
                  Create,Read,Update,Delete.<br></br> Guarda un registro de
                  nombre y edad.
                </h4>
              </div>
            </div>
            <div className="cuadro">
              <div className="img2">
                <a href="https://jovial-wozniak-17a741.netlify.app">
                  <img src={notas} className="nota" alt="nada" title="Notas" />
                </a>
              </div>
              <div className="text">
                <p className="titulo">Block de notas</p>
                <h4>
                  Guarda en una base de datos las notas. Las puedes ver y editar
                  en cualquier momento.
                </h4>
              </div>
            </div>
            <div className="cuadro">
              <div className="img2">
                <a href="https://snake-4c9ffb.netlify.app/">
                  <img
                    className="snake"
                    src={snake}
                    alt="nada"
                    title="Juego de la serpiente"
                  />
                </a>
              </div>

              <div className="text">
                <p className="titulo"> Snake </p>

                <h4>Clásico juego de la serpiente en vanilla Javascript.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
