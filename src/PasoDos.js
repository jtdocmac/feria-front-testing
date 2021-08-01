import './App.css';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useCallback, useEffect } from 'react';
//import $ from "jquery";
import Sugerir from './Sugerir';


function PasoDos({state, onStateChange}){
    const [showMe, setShow] = useState(0)
    const [resp, setResp] = useState("")
    const [txt, setTxt] = useState("")

    const handleInputChange = useCallback(event => {
      onStateChange({ ...state,
        [event.target.name]: event.target.value
     })
    }, [onStateChange])

    const triggerSugerir = () => {
      setShow(1);
    }

    //const fetch = require('node-fetch');

      /*
    useEffect(() => {
      $.ajaxSetup({
        contentType: "application/json; charset=utf-8"
      });

      fetch('http://localhost:8000/topicos/' + state.nombre )
      .then(res => res.text())
      //.then(text => console.log(text))
      .then(text => setTxt(JSON.parse(text).map((d) => <a className="linkripley" href={d.linkProd}>{d.nameProd}<br /></a>)))

    }, [])

    async function doWork(event) {
      // ajax the JSON to the server
      console.log('LOG PRUEBA');
      $.post("http://127.0.0.1:5000/receiver", JSON.stringify(state), function(){
      }).then(function (response) { // At this point, Flask has printed our JSON
        setResp(response)
        console.log('POST response: ');
        // Should be 'OK' if everything was successful
        console.log(response);
    });
    	// stop link reloading the page
   
    }
    */


    return(
      <div className = "PasoDos">
        {showMe === 0 &&(
        <div>
          <label className="paso">Paso 2: Ponle precio o déjanos sugerirte uno :)</label>
          <div className="infosugerencia2">
                  <label className="textoinfo">La sugerencia de precio es una herramienta que propone un precio competitivo para facilitar la venta rápida del producto.</label>
              </div>
          <div className="precioform">
            <Form className="form-def">
                <Form.Group className="mb-3-precio" controlId="exampleForm.ControlInput1">
                    <Form.Label className="mb-3-title-precio">Precio</Form.Label>
                    <Form.Control name="precio" value={state.precio} onChange={handleInputChange} className="mb-3-form" type="text" placeholder="Ej: $20.000" />
                </Form.Group>
                <Sugerir sugerir={() =>{triggerSugerir();
                      }}/>  
            </Form>
          </div>
        </div> 
        )} {
          showMe === 1 &&
          <div>
            <label className="paso">Paso 2: Ponle precio o déjanos sugerirte uno :)</label>
            <div className="precioform">
              <Form className="form-def">
                <div className="infosugerencia2">
                  <label className="textoinfo">La sugerencia de precio es una herramienta que propone un precio competitivo para facilitar la venta rápida del producto.</label>
                </div>
                <Form.Group className="mb-3-precio" controlId="exampleForm.ControlInput1">
                    <Form.Label className="mb-3-title-precio">Precio</Form.Label>
                    <Form.Control name="precio" value={state.precio} onChange={handleInputChange} className="mb-3-form" type="text" placeholder="$20.000" />
    
                    <div className="mensajesugerencia1">¡Encontramos tu producto!</div>
                    <div className="mensajesugerencia2">El precio que te sugerimos es de $750.000</div>
                    
                </Form.Group>
                <div className="sugerir"></div>
              </Form>
            </div>
          </div>
        }
       
      </div>
    )
  }
  

export default PasoDos;