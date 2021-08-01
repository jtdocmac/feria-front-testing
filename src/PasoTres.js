import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import PhotoResumen from './PhotoResumen';


function PasoTres({state}){
  const [showMe, setShow] = useState(true)

  const triggerVolver = () => {
    setShow(false)
  }


  return(
    <div className = "PasoTres">
      {showMe === true && (
        <div>
          <label className="paso">Paso 3: Revisa tu publicación</label>
          <div className="resumen">
            <Card.Title className="titulo">Nombre del producto</Card.Title>
            <Card.Subtitle className="mb-2-text-muted">{state.nombre}</Card.Subtitle>
            <Card.Title className="titulo">Categoría</Card.Title>
            <Card.Subtitle className="mb-2-text-muted">{state.categoria}</Card.Subtitle>
            <Card.Title className="titulo">Marca</Card.Title>
            <Card.Subtitle className="mb-2-text-muted">{state.marca}</Card.Subtitle>
            <Card.Title className="titulo">Estado</Card.Title>
            <Card.Subtitle className="mb-2-text-muted">{state.estado}</Card.Subtitle>
            <Card.Title className="titulo">Descripción</Card.Title>
            <Card.Subtitle className="mb-2-text-muted">{state.descripcion}</Card.Subtitle>
            <PhotoResumen />
            <div className="resumenprecio">
              <Card.Title className="titulo">Precio</Card.Title>
              <Card.Subtitle className="mb-2-text-muted">{state.precio}</Card.Subtitle>
            </div>
          </div>
          
        </div> 
        )}
        {showMe === false
        }  
    </div>
    )
  }
  

export default PasoTres;
