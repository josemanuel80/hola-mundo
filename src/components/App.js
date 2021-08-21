import '../styles/App.css';
import '../styles/normalize.css';
function App() {
  return (
    <body>
      <div className="wrapper">
        <div className="mainText">
          <h1>
            <u>PORTAFOLIO</u>
          </h1>
          <h2>José Manuel Castellano González</h2>
          <h2>Desarrollador software junior</h2>
        </div>
        <div className="text1">
          <div className="part1">
            {<img src="../assets/CRUD2.png" alt="" />}
          </div>
          <div className="part2">
            <a href={'https://focused-mirzakhani-101c93.netlify.app'}>
              <b>Aplicación CRUD en stack MERN.</b>
            </a>
            <p />
            <br></br>
            <p>
              Las tecnologías usadas son MongoDb para la base de datos, Express
              y NodeJs para el servidor y React para la interfaz.
            </p>
          </div>
        </div>
        <div className="mainText2"></div>
        <div className="text2">
          <div className="part3"></div>
          <div className="part4">
            <a href={'https://sleepy-northcutt-f36bee.netlify.app'}>
              <b>Aplicación buscador en React</b>
            </a>
            <p />
            <br></br>
            <p>
              Buscador de playas de España hecho en React y que consume una Api
              Rest pública.
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}
export default App;
