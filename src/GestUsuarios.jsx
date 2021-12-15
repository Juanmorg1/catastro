import { Link } from "react-router-dom";

function GestUsuarios() {
  return (
    <div className="container">
      <header class="index_home">
        <h1 class="title">Alcaldia de ibague</h1>
        <nav class="navbar subtitle">
          <Link to="/gestPredios" className="active">
            Predios
          </Link>
          <Link to="/CronoPagos" className="">
            Cronograma
          </Link>
          <Link to="/PlatPagos" className="">
            Pagos
          </Link>
          <Link to="/" className="">
            Cerrar Sesión
          </Link>
        </nav>
      </header>
      <section className="content">
        <section className="content_1">
          <dl className="txt">
            <dt>Gestion de Predios</dt>
            <dd>Crear Predio</dd>
            <dd>Actualizar Propietario</dd>
            <dd>Buscar Predios</dd>
            <dt>Cronograma de Pagos</dt>
            <dd>Generacion de Cobros</dd>
            <dd>Fecha Maxima de Pago</dd>
            <dd>Fecha de Pago con Descuento</dd>
            <dt>Plataforma de Pago</dt>
            <dd>Generacion de Multas</dd>
            <dd>Acuerdos de Pago</dd>
          </dl>
        </section>
        <section className="content_2">
          <form action="" className="grilla__xx txt" method="post">
            <div className="nom_xx">
              <label htmlFor="y1">Nombre de Usuario</label>
              <input type="text" name="" id="y1" />
            </div>
            <div className="email_xx">
              <label htmlFor="y2">Email de Usuario</label>
              <input type="text" name="" id="y2" />
            </div>
            <div className="id_xx">
              <label htmlFor="y3">ID de Usuario</label>
              <input type="text" name="" id="y3" />
            </div>
            <div className="contact_xx">
              <label htmlFor="y4">Contacto</label>
              <input type="text" name="" id="y4" />
            </div>
            <div className="dependen_xx">
              <label htmlFor="y5">Dependencia</label>
              <input type="text" name="" id="y5" />
            </div>
            <div className="search_xx">
              <button>Buscar Usuario</button>
            </div>
            <div className="list_xx">
              <button>Lista de Usuarios</button>
            </div>
            <div className="form_btns">
              <button>Crear Usuario</button>
              <button>Actualizar Usuario</button>
              <button>Borrar Usuario</button>
            </div>
            <div className="textarea_xx">
              <p>Usuarios Registrados en Plataforma</p>
              <div className="jaja"></div>
            </div>
          </form>
        </section>
      </section>
      <footer className="foot_2">
        <hr />
      </footer>
    </div>
  );
}
export default GestUsuarios;
