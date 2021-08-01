import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sugerir = (props) => {
  return <Button className="sugerir" variant="success" onClick={props.sugerir}>Sugerir</Button>
}

function ProductoEncontrado() {
    return (<div>
      <div className="mensajesugerencia1">¡Encontramos tu producto!</div>
      <div className="mensajesugerencia2">El precio que te sugerimos es de $750.000</div>
      </div>)
}

function ProductoNoEncontrado() {
  return <div className="mensajesugerencia3">Lamentablemente, no encontramos tu producto</div>;
}
  
function MensajeSugerencia(props) {
  const sugerencia = props.categoria;
  if (sugerencia == "Smartphones") {
    return <ProductoEncontrado />;
  }
  return <ProductoNoEncontrado />;
}

export default Sugerir