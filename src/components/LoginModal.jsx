function LoginModal() {
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

  return (
    <div className="login_forms">
      <div className="cont">
        <div className="anime_cont">
          <div className="animation_cont">
            <div className="login" id="over1">
              <form action="" method="">
                <label className="subtitle" for="user">
                  Usuario
                </label>
                <input className="subtitle" type="text" name="" id="user" />
                <label className="subtitle" for="pass">
                  Contraseña
                </label>
                <input className="subtitle" type="password" name="" id="pass" />
                <button className="btn">Iniciar Sesión</button>
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
                Registrarse
              </button>
            </div>
            <div className="register" id="over2">
              <img
                src="img/back_icon.png"
                alt="back icon"
                srcset=""
                width="25"
                id="back"
                onClick={back}
              />
              <form action="" method="">
                <div>
                  <label className="subtitle" for="user_r">
                    Nombre de Usuario
                  </label>
                  <input className="subtitle" type="text" name="" id="user_r" />
                </div>
                <div>
                  <label className="subtitle" for="pass_r">
                    Contraseña
                  </label>
                  <input
                    className="subtitle"
                    type="password"
                    name=""
                    id="pass_r"
                  />
                </div>
                <div>
                  <label className="subtitle" for="mail">
                    Correo
                  </label>
                  <input className="subtitle" type="email" name="" id="mail" />
                </div>
                <button className="btn">Registrarse</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginModal;
