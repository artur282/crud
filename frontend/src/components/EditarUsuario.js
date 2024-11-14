import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, updateDoc, getDoc } from "firebase/firestore";

function ActualizarUsuario() {
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
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState(valorInicial);

  const capturarDatos = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const actualizarUsuario = async (e) => {
    e.preventDefault();
    try {
      const userDoc = doc(db, "estudiante", id);
      await updateDoc(userDoc, usuario);
      setUsuario({ ...valorInicial });
      navigate("/"); // Navigate to another page after updating
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const obtenerUsuario = async (valorId) => {
    try {
      const userDoc = doc(db, "estudiante", valorId);
      const docSnap = await getDoc(userDoc);
      if (docSnap.exists()) {
        setUsuario(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document: ", error);
    }
  };

  useEffect(() => {
    if (id) {
      obtenerUsuario(id);
    }
  }, [id]);

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form onSubmit={actualizarUsuario}>
          <h2 className="text-center mb-3">Actualizar usuario</h2>
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
              <option value="" disabled>
                Seleccione una opción
              </option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>
          <div className="mb-3">
            <label>Etnia:</label>
            <select
              className="form-control"
              required
              name="etnia"
              value={usuario.etnia}
              onChange={capturarDatos}
            >
              <option value="" disabled>
                Seleccione una opción
              </option>
              <option value="ninguna">Ninguna</option>
              <option value="caribe">Caribe</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Discapacidad:</label>
            <select
              className="form-control"
              required
              name="discapacidad"
              value={usuario.discapacidad}
              onChange={capturarDatos}
            >
              <option value="" disabled>
                Seleccione una opción
              </option>
              <option value="ninguna">Ninguna</option>
              <option value="movilidad limitada">Movilidad limitada</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Status:</label>
            <select
              className="form-control"
              required
              name="status"
              value={usuario.status}
              onChange={capturarDatos}
            >
              <option value="" disabled>
                Seleccione una opción
              </option>
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </select>
          </div>

          <button className="btn btn-primary form-control">
            Actualizar Usuario
          </button>
        </form>
      </div>
    </div>
  );
}

export default ActualizarUsuario;