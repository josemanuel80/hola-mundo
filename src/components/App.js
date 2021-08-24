import '../styles/App.css';
import '../styles/normalize.css';
import crud from '../assets/CRUD2.png';
import playa from '../assets/playa2.png';
function App() {
  return (
    <body>
      <div className="wrapper">
        <div className="mainText">
          <br></br>
          <h1>
            <u>PORTAFOLIO</u>
          </h1>
          <h2>José Manuel Castellano González</h2>
          <h2>Desarrollador software junior</h2>
          <p>
            <b>
              Aplicación de un stack completo de desarrollo software en dos
              aplicaciones.
            </b>
          </p>
          <br></br>
          <br></br>
        </div>
        <div className="text1">
          <div className="part1">
            <a href="https://focused-mirzakhani-101c93.netlify.app">
              <img src={crud} alt="" />
            </a>
          </div>

          <div className="part2">
            <a href={'https://focused-mirzakhani-101c93.netlify.app'}>
              <b>
                Aplicación CRUD(Create, Read, Update, Delete) en stack MERN.
              </b>
            </a>
            <p />
            <br></br>
            <p>
              Las tecnologías usadas son React, MongoDb para la base de datos,
              Express y NodeJs para el servidor. Su funcionamiento es rellenando
              dos campos.
            </p>
            <br></br>
          </div>
        </div>
        <div className="mainText2"></div>
        <div className="text2">
          <div className="part3">
            <a href="https://sleepy-northcutt-f36bee.netlify.app">
              <img src={playa} alt="" />
            </a>
          </div>
          <div className="part4">
            <a href={'https://sleepy-northcutt-f36bee.netlify.app'}>
              <b>Buscador en React</b>
            </a>
            <p />
            <br></br>
            <p>
              Buscador de playas de España hecho en React y que consume una Api
              Rest pública. Introduzca el nombre de una ciudad costera para ver
              sus playas
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}
export default App;
