import { Link } from "react-router-dom";

function CronoPagos() {
  return (
    <div className="container">
      <header class="index_home">
        <h1 class="title">Alcaldia de ibague</h1>
        <nav class="navbar subtitle">
          <Link to="/gestPredios" className="">
            Predios
          </Link>
          <Link to="/CronoPagos" className="active">
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
        <section className="content_2_crono">
          <div className="image">
            <img src="img/cronograma.jpg" alt="" />
            <p className="">Cronograma de Pagos</p>
          </div>
          <form className="inputs txt" method="post" action="">
            <div>
              <label htmlFor="fechaMax">
                Fecha Maxima de Pago de Impuestos (Mes-Dia-Año)
              </label>
              <input type="text" name="" id="fechaMax" />
            </div>
            <div>
              <label htmlFor="fechaMaxDesc">
                Fecha Maxima de Pago con Descuento (Mes-Dia-Año)
              </label>
              <input type="text" name="" id="fechaMaxDesc" />
            </div>
            <div>
              <label htmlFor="descAñoVigen">
                Descuento Asignado para Año Vigente (Porcentaje)
              </label>
              <input type="text" name="" id="descAñoVigen" />
            </div>
            <div>
              <label htmlFor="idUserAutori">
                ID de Usuario que Autoriza las Fechas y Descuentos (Mes-Dia-Año)
              </label>
              <input type="text" name="" id="idUserAutori" />
            </div>
            <button>Guardar</button>
            <button>Generar Cobro</button>
          </form>
        </section>
      </section>
      <footer className="foot_2">
        <hr />
      </footer>
    </div>
  );
}

export default CronoPagos;
