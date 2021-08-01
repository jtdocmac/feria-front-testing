import './App.css';
import Form from 'react-bootstrap/Form';
import React, { useState, setState } from 'react';
import photo from './image.png';
import Button from 'react-bootstrap/Button';

function PhotoResumen() {
    const [selectedFile, setSelectedFile] = useState(null);


    return (
        <div className="PhotoResumen">
            <div className="photoholder">
                <img src={photo} className="photores" alt="photores" />
                <label className="labelphotores">Foto principal del producto</label>
            </div>   
        </div>
    );
}


export default PhotoResumen;