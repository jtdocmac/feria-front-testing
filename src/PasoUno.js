import './App.css';
import Form from 'react-bootstrap/Form';
import Uploader from './Uploader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import PasoDos from './PasoDos';
import PasoTres from './PasoTres';
import Continuar from './Continuar';
import Volver from './Volver';
import Publicar from './Publicar';
import Publicado from './Publicado';

function PasoUno(){
    const [showMe, setShow] = useState(0)
    const [state, setState] = useState({
        nombre: "",
        categoria: "",
        marca: "",
        modelo: "",
        estado: "",
        descripcion: "",
        precio:""
    })

    const triggerPublicar = () => {
        setShow(3)
    }

    const triggerContinuar = () => {
        setShow(1)
    }

    const triggerContinuar2 = () => {
        setShow(2)
    }


    const triggerVolver = () => {
        setShow(0)
    }

    const triggerVolver2 = () => {
        setShow(1)
    }

    const saveStateToLocalStorage = () => { 
        localStorage.setItem('state', JSON.stringify(state)); 
      } 


    const getStateFromLocalStorage = () => { 
        let data = localStorage.getItem('state'); 
        if(data !== undefined) { 
            setState(JSON.parse(data)); 
        } 
    } 

    function handleChange(event) {
        const value = event.target.value;
        setState({ ...state,
            [event.target.name]: value
         });
    }

    return(
      <div className = "PasoUno">
            {showMe === 0 && (
                <div>
                    <label className="paso">Paso 1: Describe tu producto</label>
                    <Form className="form-def">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="mb-3-title">Nombre del producto</Form.Label>
                            <Form.Control name="nombre" value={state.nombre} onChange={handleChange} className="mb-3-form" type="text" placeholder="Ej: Televisor LED, 42 pulgadas" />
                        </Form.Group>
            
                        <Form.Group className="mb-3" controlId="formBasicSelect">
                            <Form.Label className="mb-3-title-categoria">Categoría</Form.Label>
                            <Form.Control value={state.categoria} onChange={handleChange} name="categoria" as="select" className="mb-3-form-select" type="select" placeholder="Seleccione categoría">
                                <option value="Electrodomésticos">Electrodomésticos</option>
                                <option value="Smartphones">Smartphones</option>
                                <option value="Televisores">Televisores</option>
                             </Form.Control>
                        </Form.Group>
            
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="mb-3-title-ficha">Marca</Form.Label>
                            <Form.Control value={state.marca} onChange={handleChange} name="marca" className="mb-3-form" type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="mb-3-title-ficha">Modelo</Form.Label>
                            <Form.Control value={state.modelo} onChange={handleChange} name="modelo" className="mb-3-form" type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicSelect">
                            <Form.Label className="mb-3-title-categoria">Estado</Form.Label>
                            <Form.Control value={state.estado} onChange={handleChange} name="estado" as="select" className="mb-3-form-select" type="select" placeholder="Seleccione estado">
                                <option value="Perfecto">Perfecto</option>
                                <option value="Muy bueno">Muy bueno</option>
                                <option value="Bueno">Bueno</option>
                                <option value="No tan bueno">No tan bueno</option>
                                <option value="Mínimo funcional">Mínimo funcional</option>
                             </Form.Control>
                        </Form.Group>
         
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                            <Form.Label className="mb-3-title-desc">Descripción</Form.Label>
                            <Form.Control value={state.descripcion} onChange={handleChange} name="descripcion" className="mb-3-form-ficha" as="textarea" type="text" rows={5}/>
                        </Form.Group>
                    </Form>
                    <Uploader />
                    <Continuar continuar={() =>{triggerContinuar();
                    saveStateToLocalStorage();}} />
                </div>
            )}
            {showMe === 1 && 
            <div>
                <PasoDos state={state} onStateChange={setState}/>
                <div className="volver">
                    <Volver volver={() => {triggerVolver();
                    getStateFromLocalStorage();}} />
                </div>
                <div className="continuar2">
                    <Continuar continuar={() =>{triggerContinuar2();
                    saveStateToLocalStorage();}} />
                </div>
                
            </div>
            }
            {showMe === 2 &&
            <div>
                <PasoTres state={state}/>
                <div className="volver3">
                    <Volver volver={triggerVolver2} />
                    <Publicar publicar={triggerPublicar} />
                </div>
            </div>
            }
            {showMe === 3 &&
            <Publicado />
            }         
      </div>
    )
  }
  

export default PasoUno;