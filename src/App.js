import './App.css';
import Left from './componentes/Left/Left';
import Right from './componentes/Rigth/Right';
import { useState, useEffect } from 'react';

function App() {
  //const data = require('./data.json');

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=-34.9215&longitude=-57.9545&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,visibility,windspeed_10m,uv_index,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1';

  useEffect(() => {

    // Realiza la solicitud utilizando fetch con el método GET
    fetch(apiUrl, {
      method: 'GET',
      redirect: 'follow',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(alert('UPS! Vuelvo a intentarlo mas tarde...'));
        }
        return response.json();
      })
      .then((responseData) => {
        // Almacena los datos en la variable de estado 'data'
        setData(responseData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // El segundo argumento vacío asegura que esto se ejecute solo una vez

  ////// FUNCION RECARGAR
  function recargar(){
    setLoading(true);
    console.log("Explocion!")
  }
  ////// FUNCION OBTENER LOCALHOUR FORMATO hh
  // const obtenerHora = ()=> {
  //   const fecha = new Date();
  //   const horas = fecha.getHours();
  
  //   // Verificar si las horas son menores a 10 y devolver solo la segunda cifra
  //   const horaEnFormatoHH = horas < 10 ? horas : horas.toString();
  
  //   return horaEnFormatoHH;
  // }
  
  return (
    <div className="App">
      <Left 
      data={data}
      loading={loading}
      />
      {/* <button onClick={obtenerHora}>Hora</button> */}
      <Right 
      data={data}
      loading={loading}
      // obtenerHora={obtenerHora}
      />
    </div>
  );
}

export default App;
