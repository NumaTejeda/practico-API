import { useState } from 'react';
import './App.css';
import TransporteApp from './componentes/Transporte/TransporteApp';
import AppClima from './componentes/appClima';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import { Icon } from '@iconify/react';

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
            {/* Botones */}
            <div className='switch'>
              <Link to="/transporte">
                <Icon icon="fa6-solid:bus" color='blue' style={{ fontSize: '1.5rem' }} />
              </Link>
              <Link to="/practico-API">
                <Icon icon="vs:sun" color='yellow' style={{ fontSize: '1.5rem' }} />
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
