import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlatPagos_UE from "./PlatPagos_UE";
import Home from "./Home";
import GestPred from "./GestPredios";
import CronoPagos from "./CronoPagos";
import PlatPagos from "./PlatPagos";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gestPredios" element={<GestPred />} />
        <Route path="/CronoPagos" element={<CronoPagos />} />
        <Route path="/PlatPagos" element={<PlatPagos />} />
        <Route path="/PlatPagos_UE" element={<PlatPagos_UE />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
