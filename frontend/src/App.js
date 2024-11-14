import React, { Component } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navegacion from "./components/Navegacion";
import CrearUsuario from "./components/CrearUsuario";
import ListaUsuario from "./components/ListaUsuario";
import ActualizarUsuario from "./components/EditarUsuario";

class App extends Component {
  render() {
    return (
      <div className="">
        <Navegacion />
        <div className="container p-4">
          <Routes> 
            <Route path="/" element={<ListaUsuario />} />
            <Route path="/CrearUsuario" element={<CrearUsuario />} />
            <Route path="/edit/:id" element={<ActualizarUsuario />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
