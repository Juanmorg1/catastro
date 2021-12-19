import { React, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
function LoginModal() {
  const [error, setError] = useState();
  const [msgError, setMsgError] = useState();

  function translate() {
    let overlay = document.getElementById("over1"),
      overlay2 = document.getElementById("over2");
    function t() {
      overlay.style.transform = "scale(0.9) translateX(-120%)";
      overlay2.style.transform = "translateX(-100%)";
      function x() {
        overlay2.style.transform = "scale(1) translateX(-100%)";
      }
      setTimeout(x, 600);
    }
    overlay.style.transform = "scale(0.9)";
    setTimeout(t, 600);
  }
  function back() {
    let overlay = document.getElementById("over1"),
      overlay2 = document.getElementById("over2");
    overlay2.style.transform = "scale(0.9) translateX(-110%)";
    setTimeout(t, 600);
    function t() {
      overlay2.style.transform = "";
      overlay.style.transform = "";
    }
  }
  // let usuarios_login = {
  //   "admin@gmail.com": "administrador",
  //   "usuariointerno@gmail.com": "usuariointerno",
  //   "usuarioexterno@gmail.com": "usuarioexterno",
  // };
  const user_inicio = useRef();
  const pass_inicio = useRef();
  const navegacion = useNavigate();
  const iniciosesion = () => {
    const correo = user_inicio.current.value;
    const contrasena = pass_inicio.current.value;
    fetch("http://localhost:8080/user/login",{
      headers: {"content-type":"application/json"},
      method: "POST",
      body: JSON.stringify({correo,contrasena})
    })
    .then(res => res.json())
    .then(res =>{
      if(res.estado === "OK"){
        console.log("Inicia sesión -----------------");
        {window.location.href = "/Home"}
        // navegacion("/components/Home");
      }
      else{
        setError(true);
        setMsgError(res.msg);
      }
    })
    // console.log(usuarios_login);
    // if (usuarios_login[usu_inicio] === pas_inicio) {
      
    // } else {
    //   alert("informacion incorrecta");
    // }
  };

  const Usuario = useRef();
  const Contraseña = useRef();
  const Correo = useRef();
  const registro = () => {
    const usuario = Usuario.current.value;
    const contrasena = Contraseña.current.value;
    const correo = Correo.current.value;
    const rol = "Usuario Externo"
    fetch("http://localhost:8080/user/guardar_user",{
      headers: {"content-type": "application/json"},
      method: "POST",
      body: JSON.stringify({usuario,correo,contrasena,rol})
    })
    .then(res => res.json())
    .then(res =>{
      if(res.estado === "OK"){
        setError(true);
        setMsgError("Usuario registrado");
        Usuario.current.value = "";
        Contraseña.current.value = "";
        Correo.current.value = "";
            
      }
      else{
        setError(true);
        setMsgError(res.msg);
      }
    })
  };

  return (
    <div className="login_forms">
      <div className="cont">
        <div className="anime_cont">
          <div className="animation_cont">
            <div className="login" id="over1">
              {error && <div className="alert alert-danger">{msgError}</div>}
              <form action="" method="">
                <label className="subtitle" htmlFor="user">
                  Usuario
                </label>
                <input
                  className="subtitle"
                  type="text"
                  name=""
                  id="user"
                  ref={user_inicio}
                />
                <label className="subtitle" htmlFor="pass">
                  Contraseña
                </label>
                <input
                  className="subtitle"
                  type="password"
                  name=""
                  id="pass"
                  ref={pass_inicio}
                />
                <button type="button" className="btn" onClick={iniciosesion}>
                  Iniciar Sesión
                </button>
              </form>
              <a className="txt" href="#">
                ¿Has Olvidado la Contraseña?
              </a>
              <hr />
              <button
                className="btn"
                type="button"
                id="reg"
                onClick={translate}
              >
                Registro
              </button>
            </div>
            <div className="register" id="over2">
              <img
                src="img/back_icon.png"
                alt="back icon"
                srcSet = ""
                width="25"
                id="back"
                onClick={back}
              />
              {error && <div className="alert alert-danger">{msgError}</div>}
              <form action="" method="">
                <div>
                  <label className="subtitle" htmlFor="user_r">
                    Nombre de Usuario
                  </label>
                  <input
                    className="subtitle"
                    type="text"
                    name=""
                    id="user_r"
                    ref={Usuario}
                  />
                </div>
                <div>
                  <label className="subtitle" htmlFor="pass_r">
                    Contraseña
                  </label>
                  <input
                    className="subtitle"
                    type="password"
                    name=""
                    id="pass_r"
                    ref={Contraseña}
                  />
                </div>
                <div>
                  <label className="subtitle" htmlFor="mail">
                    Correo
                  </label>
                  <input
                    className="subtitle"
                    type="email"
                    name=""
                    id="mail"
                    ref={Correo}
                  />
                </div>
                <button type="button" className="btn" onClick={ registro }>
                  Registrarse
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginModal;
