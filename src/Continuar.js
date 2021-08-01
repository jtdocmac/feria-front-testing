import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Continuar = (props) => {
  return <Button className="primercontinuar" variant="success" onClick={props.continuar}>Continuar</Button>
}

export default Continuar