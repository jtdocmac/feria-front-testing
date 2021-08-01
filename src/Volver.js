import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Volver = (props) => {
  return <Button className="volverf" onClick={props.volver}>Volver</Button>
}

export default Volver