import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import tick from './tick.png';

function Publicado() {
    return(
        <div className="Publicado">
            <img src={tick} className="tickph" alt="tickph" />
            <label className="titulopub">¡Producto publicado!</label>
        </div>
    );
}

export default Publicado;