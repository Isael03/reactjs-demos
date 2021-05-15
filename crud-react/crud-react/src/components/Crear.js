import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { api } from "../servicios/api";

class Crear extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      correo: '',
      errores: []
    };

    this.cambiarEstado = this.cambiarEstado.bind(this)
    this.enviarDatos = this.enviarDatos.bind(this)
  }

  verificarError(elemento) {
    return this.state.errores.indexOf(elemento) !== -1
  }

  enviarDatos(event) {

    event.preventDefault();
    const { nombre, correo } = this.state;

    let errores = [];
    if (!nombre) errores.push("error_nombre")
    if (!correo) errores.push("error_correo")

    this.setState({ errores: errores })
    if (errores.length > 0) return false


    const datosEnviar = { nombre: nombre, correo: correo };

    fetch(`${api}/?insertar=1`, {
      method: 'POST',
      body: JSON.stringify(datosEnviar)
    })
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        this.props.history.push('/');

      })
      .catch((err) => console.error(err));

  }

  cambiarEstado(event) {
    /*const name = event.target.name
    this.setState({
      [name]: event.target.value,
    });*/

    const state = this.state;
    state[event.target.name] = event.target.value
    this.setState({ state, errores: [] })
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">Empleados</div>
        <div className="card-body">
          <form onSubmit={this.enviarDatos}>
            <div className="form-group">
              <label htmlFor="">Nombre</label>
              <input type="text" name="nombre" id="nombre" className={((this.verificarError("error_nombre")) ? 'is-invalid ' : '') + "form-control"} placeholder="Nombre" aria-describedby="helpId" onChange={this.cambiarEstado} value={this.state.nombre} />
              <small id="" className="invalid-feedback">Escribe el nombre del empleado</small>
            </div>
            <div className="form-group">
              <label htmlFor="">Correo</label>
              <input type="text" name="correo" id="correo" className={((this.verificarError("error_correo")) ? 'is-invalid ' : '') + "form-control"} placeholder="Correo" aria-describedby="helpId" onChange={this.cambiarEstado} value={this.state.correo} />
              <small id="" className="invalid-feedback">Escribe el correo del empleado</small>
            </div>
            <div className="btn-group" role="group" aria-label="">
              <button type="submit" className="btn btn-success">Agregar nuevo empleado</button>
              <Link to={'/'} className="btn btn-danger">Cancelar</Link>

            </div>
          </form>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    );
  }
}

export default Crear;
