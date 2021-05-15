import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { api } from "../servicios/api";

class Editar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosCargados: false,
      empleado: {},

    };
    this.cambiarEstado = this.cambiarEstado.bind(this)
    this.enviarDatos = this.enviarDatos.bind(this)
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`${api}/?consultar=${id}`)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos);
        this.setState({ datosCargados: true, empleado: datos[0] });
      })
      .catch((err) => console.error(err));
  }

  cambiarEstado(event) {
    const state = this.state.empleado;
    state[event.target.name] = event.target.value
    this.setState({ empleado: state })
  }

  enviarDatos(event) {

    event.preventDefault();
    const { id, nombre, correo } = this.state.empleado;

    const datosEnviar = { id: id, nombre: nombre, correo: correo };

    fetch(`${api}/?actualizar=1`, {
      method: 'POST',
      body: JSON.stringify(datosEnviar)
    })
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        this.props.history.push('/');

      })
      .catch((err) => console.error(err));

  }

  render() {
    const { datosCargados, empleado } = this.state;
    if (!datosCargados) {
      return <div>Cargando...</div>
    }
    return (
      <div className="card">
        <div className="card-header">Editar Empleados</div>
        <div className="card-body">
          <h4 className="card-title">Title</h4>


          <form onSubmit={this.enviarDatos}>

            <div className="form-group">
              <label htmlFor="">Clave</label>
              <input type="text" readOnly className="form-control" name="id" id="id" aria-describedby="id" placeholder="Id" value={empleado.id} />
              <small id="" className="form-text text-muted">Clave</small>
            </div>

            <div className="form-group">
              <label htmlFor="">Nombre</label>
              <input type="text" name="nombre" id="nombre" className="form-control" placeholder="Nombre" aria-describedby="helpId" value={empleado.nombre} onChange={this.cambiarEstado} />
              <small id="" className="text-muted">Escribe el nombre del empleado</small>
            </div>
            <div className="form-group">
              <label htmlFor="">Correo</label>
              <input type="text" name="correo" id="correo" className="form-control" placeholder="Correo" aria-describedby="helpId" value={empleado.correo} onChange={this.cambiarEstado} />
              <small id="" className="text-muted">Escribe el correo del empleado</small>
            </div>
            <div className="btn-group" role="group" aria-label="">
              <button type="submit" className="btn btn-success">Actualizar empleado</button>
              <Link to={'/'} className="btn btn-danger">Cancelar</Link>

            </div>
          </form>

        </div>
        <div className="card-footer text-muted"></div>
      </div>
    );
  }
}

export default Editar;
