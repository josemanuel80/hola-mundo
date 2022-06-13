import playa from '../assets/Playas.png';

import crud from '../assets/CRUD2.png';

import snake from '../assets/Snake.png';
import Restaurante from '../assets/Restaurante.png';
import '../style/Home.css';
import '../style/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';

const Home = () => {
  /*   const history = useHistory();
  const info = () => {
    history.push('/Info');
  };

  const Contact = () => {
    history.push('/Contact');
  }; */
  return (
    <div className="App">
      <div className="wrapper">
        {/* <div className="header">
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
        </div> */}
        <div className="panel">
          <div class="portafolio">
            <h1>Portafolio</h1>
            <h2>José Manuel Castellano Gonzalez</h2>
            <h2>Desarrollador web Junior</h2>
          </div>

          {/* reactstrap */}

          <Container className="col col-12">
            <Row>
              <Col className="col-4 offset-1 mt-5">
                <Card>
                  <CardImg alt="Card image cap" src={playa} top width="100%" />
                  <CardBody>
                    <CardTitle tag="h3">Buscador de playas</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      React
                    </CardSubtitle>
                    <CardText>
                      Buscador de playas de España. Introduzca el nombre de una
                      ciudad costera para ver sus playas y sus detalles.
                    </CardText>
                    <Button href="https://sleepy-northcutt-f36bee.netlify.app">
                      Visitar buscador
                    </Button>
                  </CardBody>
                </Card>
              </Col>

              <Col className="col-4 offset-3 mt-5">
                <Card>
                  <CardImg alt="Card image cap" src={crud} top width="100%" />
                  <CardBody>
                    <CardTitle tag="h3">C.R.U.D.</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      React, Node, Express, MongoDb
                    </CardSubtitle>
                    <CardText>
                      Aplicación CRUD que funciona introduciento el nombre y la
                      edad de una persona para poder crearla, editarla o
                      borrarla de la base de datos.
                    </CardText>
                    <Button href="https://focused-mirzakhani-101c93.netlify.app">
                      Ejecutar aplicación
                    </Button>
                  </CardBody>
                </Card>
              </Col>

              <Col className="col-4 offset-1 mt-5">
                <Card>
                  <CardImg
                    alt="Card image cap"
                    src={Restaurante}
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h3">Web restaurante</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      HTML, CSS, Javascript, Bootstrap.
                    </CardSubtitle>
                    <CardText>
                      Web para la sección de comida a domicilio de un
                      restaurante.
                    </CardText>
                    <Button href="https://zealous-newton-1adf4f.netlify.app">
                      Visitar web
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col className="col-4 offset-3 mt-5">
                <Card>
                  <CardImg alt="Card image cap" src={snake} top width="100%" />
                  <CardBody>
                    <CardTitle tag="h3">Snake</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Vanilla Javascript
                    </CardSubtitle>
                    <CardText>
                      Para terminar un juego, el clasico Snake.
                    </CardText>
                    <Button href="https://snake-4c9ffb.netlify.app/">
                      Jugar
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          {/* <div className="cuadro">
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
            </div> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
