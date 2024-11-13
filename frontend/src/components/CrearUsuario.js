import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function CrearUsuario() {
  const valorInicial = {
    nombre: "",
    apellido: "",
    edad: "",
    telefono: "",
    correo: "",
    nacimiento: "",
    cedula: "",
    sexo: "",
    etnia: "",
    discapacidad: "",
    status: "",
  };

  let { id } = useParams();

  const [usuario, setUsuario] = useState(valorInicial);
  const [subId, setSubId] = useState(id);

  const capturarDatos = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const guardarDatos = async (e) => {
    e.preventDefault();
    //logica peticion post
    const newUser = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      telefono: usuario.telefono,
      correo: usuario.correo,
      nacimiento: usuario.nacimiento,
      cedula: usuario.cedula,
      sexo: usuario.sexo,
      etnia: usuario.etnia,
      discapacidad: usuario.discapacidad,
      status: usuario.status,
    };

    await axios.post("http://localhost:4000/api/usuarios", newUser);

    setUsuario({ ...valorInicial });
  };

  //actualizar usuario

  const ActualizarUsuario = async (e) => {
    e.preventDefault();
    const newUser = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      telefono: usuario.telefono,
      correo: usuario.correo,
      nacimiento: usuario.nacimiento,
      cedula: usuario.cedula,
      sexo: usuario.sexo,
      etnia: usuario.etnia,
      discapacidad: usuario.discapacidad,
      status: usuario.status,
    };
    await axios.put("http://localhost:4000/api/usuarios/" + subId, newUser);
    setUsuario({ ...valorInicial });
    setSubId("");
  };

  //peticion a la api

  const obtenerUsuario = async (valorId) => {
    const res = await axios.get(
      "http://localhost:4000/api/usuarios/" + valorId
    );
    setUsuario({
      nombre: res.data.nombre,
      apellido: res.data.apellido,
      telefono: res.data.telefono,
      edad: res.data.edad,
      correo: res.data.correo,
      nacimiento: res.data.nacimiento,
    cedula: res.data.cedula,
    sexo: res.data.sexo,
    etnia: res.data.etnia,
    discapacidad:res.data.discapacidad,
    status: res.data.status
    });
  };

  useEffect(() => {
    if (subId !== "") {
      obtenerUsuario(subId);
    }
  }, [subId]);

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form onSubmit={guardarDatos}>
          <h2 className="text-center mb-3 ">Crear usuario</h2>
          <div className="mb-3">
            <label>Nombre:</label>
            <input
              type="text"
              className="form-control"
              placeholder="ingresar su nombre"
              required
              name="nombre"
              value={usuario.nombre}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Apellido:</label>
            <input
              type="text"
              className="form-control"
              placeholder="ingresar su apellido"
              required
              name="apellido"
              value={usuario.apellido}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Edad:</label>
            <input
              type="number"
              className="form-control"
              placeholder="ingresar su edad"
              required
              name="edad"
              value={usuario.edad}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Telefono:</label>
            <input
              type="number"
              className="form-control"
              placeholder="ingresar su numero de telefono"
              required
              name="telefono"
              value={usuario.telefono}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Correo:</label>
            <input
              type="email"
              className="form-control"
              placeholder="ingresar su correo electronico"
              required
              name="correo"
              value={usuario.correo}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>nacimiento:</label>
            <input
              type="date"
              className="form-control"
              placeholder="Fecha de nacimiento"
              required
              name="nacimiento"
              value={usuario.nacimiento}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Cedula:</label>
            <input
              type="number"
              className="form-control"
              placeholder="ingresar su cedula"
              required
              name="cedula"
              value={usuario.cedula}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Sexo:</label>
            <select
              className="form-control"
              required
              name="sexo"
              value={usuario.sexo}
              onChange={capturarDatos}
            >
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>
          <div className="mb-3">
            <label>etnia:</label>
            <select
              className="form-control"
              required
              name="etnia"
              value={usuario.etnia}
              onChange={capturarDatos}
            >
              <option value="ninguna">ninguna</option>
              <option value="caribe">caribe</option>
            </select>
          </div>
          <div className="mb-3">
            <label>discapacidad:</label>
            <select
              className="form-control"
              required
              name="discapacidad"
              value={usuario.discapacidad}
              onChange={capturarDatos}
            >
              <option value="ninguna">ninguna</option>
              <option value="movilidad limitada">movilidad limitada</option>
            </select>
          </div>
          <div className="mb-3">
            <label>status:</label>
            <select
              className="form-control"
              required
              name="status"
              value={usuario.status}
              onChange={capturarDatos}
            >
              <option value="masculino">activo</option>
              <option value="femenino">inactivo</option>
            </select>
          </div>

          <button className="btn btn-primary form-control">
            Guardar Usuario
          </button>
        </form>
        <form onSubmit={ActualizarUsuario}>
          <button className="btn btn-danger form-control mt-2">
            Actualizar informacion
          </button>
        </form>
      </div>
    </div>
  );
}

export default CrearUsuario;
