import './App.css';
import Form from 'react-bootstrap/Form';
import React, { useState, setState } from 'react';
import photo from './image.png';
import Button from 'react-bootstrap/Button';

function Uploader() {
    const [selectedFile, setSelectedFile] = useState(null);


    return (
        <div className="Uploader">
            <div className="photoholder">
                <img src={photo} className="photoph" alt="photoph" />
                <label className="subeuna">Sube una foto del producto</label>
            </div>
            <button className="fileinput">
                Examinar
                <input type="file" className="file" onChange={(event) => setSelectedFile(event.target.files[0])}/>
            </button>    
        </div>
    );
}


export default Uploader;