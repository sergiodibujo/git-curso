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
      <div>Dia 2git status
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <ul className="floo">
        <li className="lista" id="faa1">trxto 1</li>
        <li className="lista" id="faa2">trxto 2</li>
        <li className="lista" id="faa3">trxto 3</li>
        <li className="lista" id="faa4">trxto 4</li>
        <li className="lista" id="faa5">trxto 5</li>
        <li className="lista" id="faa6">trxto 6</li>
      </ul>
    <p>COmo lo muevo arriba y abajo? ALT + Flecha arriba</p>
      <div>Shift+alt+F Reindenta el codigo</div>


    <p className="">Duplico linea con SHift+Alt+flecha arriba</p>
    <p>Listo emmet y listo mover, solo es entrenarlo</p>


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
