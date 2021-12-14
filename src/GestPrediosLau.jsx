import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Lista_Predios } from "./Lista_Predios";

const predio_bd = require("./modelos/prediosModel")

function GestPredios() {
    const codpre = useRef();
    const nompro = useRef();
    const docpro = useRef();
    const areat = useRef();
    const areac = useRef();
    const barrio = useRef();
    const direc = useRef();
    const [alerta,setAlerta] = useState(false);

    let predio =[];
    const crear = () =>{
      const cod = codpre.current.value;
      const nom = nompro.current.value;
      const doc = docpro.current.value;
      const at = areat.current.value;
      const ac = areac.current.value;
      const bar = barrio.current.value;
      const dir = direc.current.value;
      if (cod === ''){
          console.log("Ingrese Datos de Predio a Crear");
          codpre.current.value = "";
          nompro.current.value = "";
          docpro.current.value = "";
          areat.current.value = "";
          areac.current.value = "";
          barrio.current.value = "";
          direc.current.value = "";    
      }
      else{
          const datos = {codpre:cod,nompro:nom,docpro:doc,areat:at,areac:ac,barrio:bar,direc:dir};
          const p = new predio_bd(datos)
          p.save(function(err){
            if(err){
              res.send({status:"Error",msg:"No se guardaron los datos"})
              return false;
            }
            res.send({status:"Ok",msg:"Se guardaron los datos correctamente"})
              
          })
          // const p = {codpre:cod,nompro:nom,docpro:doc,areat:at,areac:ac,barrio:bar,direc:dir};
          // predio = JSON.parse(localStorage.getItem("predio")) || [];
          // predio.push(p);
          // localStorage.setItem("predio",JSON.stringify(predio));
          // console.log(predio);
          // setAlerta(true);
          codpre.current.value = "";
          nompro.current.value = "";
          docpro.current.value = "";
          areat.current.value = "";
          areac.current.value = "";
          barrio.current.value = "";
          direc.current.value = "";
          setTimeout(()=> setAlerta(false),5000);
      }
    };

    const buscar = () =>{
      const cod = codpre.current.value;
      const buspre = JSON.parse(localStorage.getItem("predio")) || [];
      console.log(buspre);
      console.log(buspre[cod-1]);
      if (cod === ''){
          console.log("Ingrese Datos de Predio a Buscar");
          codpre.current.value = "";
          nompro.current.value = "";
          docpro.current.value = "";
          areat.current.value = "";
          areac.current.value = "";
          barrio.current.value = "";
          direc.current.value = "";    
      }
      else{
          nompro.current.value = buspre[cod-1].nompro;
          docpro.current.value = buspre[cod-1].docpro;
          areat.current.value = buspre[cod-1].areat;
          areac.current.value = buspre[cod-1].areac;
          barrio.current.value = buspre[cod-1].barrio;
          direc.current.value = buspre[cod-1].direc;    
      }
    };

    const actualizar = () =>{
      const cod = codpre.current.value;
      const editar = JSON.parse(localStorage.getItem("predio")) || [];
      editar[cod-1].nompro = nompro.current.value;
      editar[cod-1].codpre = docpro.current.value;
      editar[cod-1].areat = areat.current.value;
      editar[cod-1].areac = areac.current.value;
      editar[cod-1].barrio = barrio.current.value;
      editar[cod-1].direc = direc.current.value;
      console.log(editar);
      localStorage.setItem("predio",JSON.stringify(editar));
      
      
    };
    
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
              <dt>Gestión de Predios</dt>
              <dd>Crear Predio</dd>
              <dd>Actualizar Propietario</dd>
              <dd>Buscar Predios</dd>
              <dt>Cronograma de Pagos</dt>
              <dd>Generación de Cobros</dd>
              <dd>Fecha Máxima de Pago</dd>
              <dd>Fecha de Pago con Descuento</dd>
              <dt>Plataforma de Pago</dt>
              <dd>Generación de Multas</dd>
              <dd>Acuerdos de Pago</dd>
            </dl>
          </section>
          <section className="content_2">
            <form action="" className="grilla txt" method="post">
                <div className="Cod_Pred">
                  <label htmlFor="cod">Código del Predio</label>
                  <input type="text" id="cod" ref={codpre}/>
                </div>
                <div className="Nom_Prop">
                  <label htmlFor="nom">Nombre del Propietario</label>
                  <input type="text" id="nom" ref={nompro}/>
                </div>
                <div className="Ced_Prop">
                  <label htmlFor="ced">Cédula de Propietario</label>
                  <input type="text" id="ced" ref={docpro}/>
                </div>
                <div className="Area_T">
                  <label htmlFor="ar_t">Área Total</label>
                  <input type="text" id="ar_t" ref={areat}/>
                </div>
                <div className="Area_C">
                  <label htmlFor="ar_c">Área Construida</label>
                  <input type="text" id="ar_c" ref={areac}/>
                </div>
                <div className="Barrio_Pred">
                  <label htmlFor="bar">Barrio del Predio</label>
                  <input type="text" id="bar" ref={barrio}/>
                </div>
                <div className="Dir_Pred">
                  <label htmlFor="dir">Dirección del Predio</label>
                  <input type="text" id="dir" ref={direc}/>
                </div>
                <div className="Info_Pred">
                  <p>Información de Predios</p>
                  <div className="info">
                    <Lista_Predios />
                  </div>
                </div>
                <div className="Create_btn btns">
                  <button type="button" onClick={crear}>Crear Predio</button>
                </div>
                <div className="Update_btn btns">
                  <button type="button" onClick={actualizar}>Actualizar Predio</button>
                </div>
                <div className="Search_btn btns">
                  <button type="button" onClick={buscar}>Buscar Predio</button>
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