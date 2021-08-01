import logo from './logo.png';
import './App.css';
import NavBar from './NavBar';
import PasoUno from './PasoUno';
import { Navbar } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="fondo">
          <NavBar />
          <img src={logo} className="App-logo" alt="logo" />
          <PasoUno />
        </div>  
      </header>
    </div>
  );
}


export default App;
