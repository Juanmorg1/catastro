import { Link } from "react-router-dom";

function GestPredios() {
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
          <Link to="/home" className="">
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
          <form action="" className="grilla txt" method="post">
              <div className="Cod_Pred">
                <label htmlFor="cod">Codigo del Predio</label>
                <input type="text" id="cod" />
              </div>
              <div className="Nom_Prop">
                <label htmlFor="nom">Nombre del Propietario</label>
                <input type="text" id="nom" />
              </div>
              <div className="Ced_Prop">
                <label htmlFor="ced">Cedula del Propietario</label>
                <input type="text" id="ced" />
              </div>
              <div className="Area_T">
                <label htmlFor="ar_t">Area Total</label>
                <input type="text" id="ar_t" />
              </div>
              <div className="Area_C">
                <label htmlFor="ar_c">Area Construida</label>
                <input type="text" id="ar_c" />
              </div>
              <div className="Barrio_Pred">
                <label htmlFor="bar">Barrio del Predio</label>
                <input type="text" id="bar" />
              </div>
              <div className="Dir_Pred">
                <label htmlFor="dir">Direccion del Predio</label>
                <input type="text" id="dir" />
              </div>
              <div className="Info_Pred">
                <p>Informacion de Predios</p>
                <div className="info"></div>
              </div>
              <div className="Create_btn btns">
                <button>Crear Predio</button>
              </div>
              <div className="Update_btn btns">
                <button>Actualizar Predio</button>
              </div>
              <div className="Search_btn btns">
                <button>Buscar Predio</button>
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
export default GestPredios;
