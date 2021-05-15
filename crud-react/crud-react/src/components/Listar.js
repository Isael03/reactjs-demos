import React, { Component } from "react";
import { Link } from "react-router-dom";
import { api } from "../servicios/api";

export class Listar extends Component {
  constructor(props) {
    super(props);
    this.state = { datosCargados: false, empleados: [] };
    this.cambiarHeader = this.cambiarHeader.bind(this);
  }

  cambiarHeader(titulo) {
    document.title = titulo;
  }

  cargarDatos() {

    fetch(api)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos);
        this.setState({ datosCargados: true, empleados: datos });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.cargarDatos();
  }

  borrarRegistros(id) {

    fetch(`${api}/?borrar=${id}`)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos);
        this.cargarDatos()
      })
      .catch((err) => console.error(err));
  }
  /*componentDidUpdate() {
    this.cargarDatos();
    return () => {
      window.removeEventListener("load", this.cargarDatos)
    }
  }*/

  render() {
    this.cambiarHeader("Empleados");
    const { datosCargados, empleados } = this.state;

    if (!datosCargados) {
      return <div>Cargando...</div>;
    }
    return (
      <div className="card">
        <div className="card-header">
          <Link className="btn btn-success" to={"/crear"}>
            Agregar nuevo empleado
          </Link>
        </div>
        <div className="card-body">
          <h4> Empleados</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {empleados.map((empleado) => (
                <tr key={empleado.id}>
                  <td>{empleado.id}</td>
                  <td>{empleado.nombre}</td>
                  <td>{empleado.correo}</td>
                  <td>
                    <div className="btn-group" role="group" aria-label="">
                      <Link className="btn btn-warning" to={`/editar/${empleado.id}`}>
                        Editar
                      </Link>
                      <button className="btn btn-danger" onClick={() => this.borrarRegistros(empleado.id)}>
                        Borrar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    );
  }
}
