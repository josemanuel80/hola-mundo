import { useHistory } from 'react-router-dom';
import playa from '../assets/playa2.png';
import home from '../assets/home.svg';
import email from '../assets/email.svg';
import crud from '../assets/CRUD2.png';
import perfil from '../assets/Perfil.png';
import snake from '../assets/Snake.png';
import notas from '../assets/Notas.png';
import '../style/Home.css';
import '../style/normalize.css';

const Home = () => {
  const history = useHistory();
  const info = () => {
    history.push('/Info');
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
            <img src={home} alt="nada" title="Inicio" className="home" />
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
            <h2>José Manuel Castellano Gonzalez</h2>
            <h2>Desarrollador software Junior</h2>
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
                <p>
                  Busque por el nombre de cualquier ciudad costera de España.
                  (React)
                </p>
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
                <p>Create,Read,Update,Delete.</p>
                (React,Mongo,Express,Node)
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
                <p>Guarda en una base de datos las notas.</p>
                (React,Mongo,Express,Node)
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

                <p>Clásico juego de la serpiente (vanilla Javascript).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
