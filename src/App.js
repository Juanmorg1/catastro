import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <header className="index_head">
        <h1 className="title">Gestion Catastral - Gobernacion del Tolima</h1>
      </header>
      <div className="index_form">
        <div className="cont">
          <form action="" method="post">
            <label className="subtitle" for="user">
              Usuario
            </label>
            <input className="subtitle" type="text" name="" id="user" />
            <label className="subtitle" for="pass">
              Contraseña
            </label>
            <input className="subtitle" type="password" name="" id="pass" />
            <Link to="/home" className="btn">Iniciar Sesión</Link>
          </form>
          <a className="txt" href="#">
            ¿Has Olvidado la Contraseña?
          </a>
          <hr />
          <button className="btn">Registrarse</button>
        </div>
      </div>
      <footer className="foot">
        <div className="footer_cont">
          <p>
            Gobernación del Tolima <br />
            Ibagué - Capital Musical de Colombia
          </p>
          <p>@2021 Copyright - Team Seven</p>
          <p>
            info_catastro@ibague.com.co
            <br />
            Conmutador: 608-7654321 Extensión: 12345{" "}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
