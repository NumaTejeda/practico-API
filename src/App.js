import { useState } from 'react';
import './App.css';
import TransporteApp from './componentes/Transporte/TransporteApp';
import AppClima from './componentes/appClima';

function App() {

  const [changeW, setChangeW] = useState(window.screen.width);

  function handleChange() {
    setChangeW(window.screen.width)
  }
  // Escucha el cambio de pantalla ejecuta la funcion y setea el width
  window.onresize = handleChange;


  return (
    <div className="App">
      {changeW > '632' ?
        <>
          <AppClima />
          <TransporteApp />
        </>
        :
        <>
          <button>Funciona</button>
          <AppClima />
          <TransporteApp />
        </>
      }
    </div>
  );
}

export default App;
