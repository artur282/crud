import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { collection, doc, getDocs,deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
function ListaUsuario() {
    const [lista, setLista] = useState([]);
  
    useEffect(() => {
      const getStudiante = collection(db, "estudiante");
      getDocs(getStudiante).then((resp) => {
        setLista(
          resp.docs.map((doc) => {
            const data = doc.data();
            // Convertir a formato timestamp
            if (data.nacimiento && data.nacimiento.toDate) {
              data.nacimiento = data.nacimiento.toDate().toLocaleDateString();
            }
            return { ...data, id: doc.id };
          })
        );
      });
    }, []);
  
    const EliminarUsuario = async (id) => {
        try {
            const userDoc = doc(db, "estudiante", id);
            await deleteDoc(userDoc);
            setLista(lista.filter((user) => user.id !== id));
          } catch (error) {
            console.error("Error deleting user: ", error);
          }
      ;
    };
  
    return (
      <div className="row">
        {lista.map((list) => (
          <div className="col-md-3 p-1" key={list.id}>
            <div className="card">
              <div className="card-header">
                <h5>Nombre: {list.nombre}</h5>
              </div>
              <div className="card-body">
                <p>Apellido: {list.apellido}</p>
                <p>Edad: {list.edad}</p>
                <p>Teléfono: {list.telefono}</p>
                <p>Nacimiento: {list.nacimiento}</p>
                <p>Cédula: {list.cedula}</p>
                <p>Sexo: {list.sexo}</p>
                <p>Etnia: {list.etnia}</p>
                <p>Discapacidad: {list.discapacidad}</p>
                <p className={list.status === "activo" ? "text-success" : "text-danger"}>
              Status: {list.status}
            </p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => EliminarUsuario(list.id)}
                >
                  Eliminar
                </button>
                <Link className="btn btn-primary m-1" to={"/edit/" + list.id}>
                  Editar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

export default ListaUsuario;
