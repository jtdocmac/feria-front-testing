import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Publicar = (props) => {
  return <Button className="publicar" variant="success" onClick={props.publicar}>Publicar</Button>
}

export default Publicar