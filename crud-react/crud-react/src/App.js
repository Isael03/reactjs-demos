import "./App.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import { Listar } from "./components/Listar";
import Crear from "./components/Crear";
import Editar from "./components/Editar";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light mb-4">
        <div className="nav navbar-nav">
          <Link className="nav-item nav-link active" to={"/"}>
            Sistema
          </Link>

        </div>
      </nav>
      <div className="container">
        <Route exact path="/" component={Listar} />
        <Route path="/crear" component={Crear} />
        <Route path="/editar/:id" component={Editar} />
      </div>
    </Router>
  );
}

export default App;
