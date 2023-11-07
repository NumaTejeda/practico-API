import { useState } from 'react';
import './App.css';
import TransporteApp from './componentes/Transporte/TransporteApp';
import AppClima from './componentes/appClima';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import btnMap from "./assets/climaSVG/lluviaNocheSVG.svg";

function App() {

  const [changeWidth, setChangeW] = useState(window.screen.width);

  function handleChange() {
    setChangeW(window.screen.width)
  }
  // Escucha el cambio de pantalla ejecuta la funcion y setea el width
  window.onresize = handleChange;


  return (
    <div className="App">
      {changeWidth > '632' ?
        <>
          <AppClima />
          <TransporteApp />
        </>
        :
        <>
          <BrowserRouter>
            <div className='switch'>
              <Link to="/transporte">
                <button className='botones' id="botonT">
                  Transporte
                </button>
              </Link>
              <Link to="/practico-API">
                <button className='botones' id="botonC">
                  Clima
                </button>
              </Link>
            </div>
            <Routes>
              <Route path='/practico-API' element={ <AppClima/> } />
              <Route path="/transporte" element={ <TransporteApp/>} />
            </Routes> 
          </BrowserRouter>
        </>
      }
    </div>
  );
}

export default App;
