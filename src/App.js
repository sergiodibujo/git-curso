import logo from './logo.svg';
import './App.css';

function App() {
  let sarName = "Dyno Sergio";
  let sarLogo = "https://logoeps.com/wp-content/uploads/2013/03/jurassic-park-vector-logo.png";
  // Hago el map, Luego pregunto quien esta y luego pinto
  // let autorizado = true;
  
  
  let users = ['Sergio', "Andres", "Jairo"];
  
  //  Cambiar autorizado por  El valor del input cuando escribe";

  let autorizado = "Andres";
  if (autorizado.includes("Sergio")) {
    autorizado = "Este es el admin";
  } 
  else if (autorizado.includes("Jairo")) {
    autorizado = "Este es el hombre gordo";
  }
  else if (autorizado.includes("Andres")) {
    autorizado = "Este es el Allahu Akbar";
  }
  else {
    autorizado = "Es algun otro mechudo";
  };
  return (
    <>
      <div className="sar-App">
        <header>
          <h1>{sarName}</h1>
          <img src={sarLogo} className="sarLogo" alt="Es mi logo" />
        </header>

        <div>
          <p>Escriba uno de nombres de este arreglo que leí con .map</p>
          <div className="lista-centrada">
            <ul>
              {users.map((userItem, index) => (<li key={index}>{userItem}</li>))}
            </ul>
          </div>
          <div className="aqui">
            <img src="https://gramaticas.marcoele.com/papeles/adverbios/adverbio/adverbio-de-lugar/files/image_stack_img-28.jpg" height="60" width="auto" alt=""></img>
            <p>Debo leer este input y para pasarle el dato por la var "autorizado"</p>
            <input type="text" id="userName"></input>
          </div>
          <p className="sarUsuario">{autorizado}</p>
          
        </div>
      </div>






      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Editar <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>





    </>
  );
}

export default App;
