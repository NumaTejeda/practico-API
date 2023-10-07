import './App.css';
import Left from './componentes/Left/Left';
import Right from './componentes/Rigth/Right';


function App() {
  const data = require('./data.json');

  // Left
  const currentTemp = data.current_weather.temperature;
  const currentDayCode = data.current_weather.is_day;
  const toDay = data.daily.time[currentDayCode];
  const highToDay = data.daily.temperature_2m_max[currentDayCode];
  const lowToDay = data.daily.temperature_2m_min[currentDayCode];

  //Right-Highlights
  const humedity = data.hourly.relativehumidity_2m[4]; //elijo cualquier hora
  const visibility = data.hourly.visibility[4]/1000;
  const airQuality = data.hourly.european_aqi[4];
  const uvIndex = data.daily.uv_index_max[0];
  const speedWind = data.daily.windspeed_10m_max[0];
  const sunRise = data.daily.sunrise[0].split('T')[1];
  const sunSet = data.daily.sunset[0].split('T')[1];

  //Right-Today
  const tempPorHora = data.hourly.temperature_2m; //Array con las temperaturas por hora
  
  return (
    <div className="App">
      <Left 
      diaActual={toDay} 
      tempActual={currentTemp} 
      maxTempToDay={highToDay} 
      lowTempToDay={lowToDay}
      />
      <Right 
      humedad={humedity} 
      visibilidad={visibility} 
      calidadDeAire={airQuality}
      indiceUV={uvIndex}
      velocidadViento={speedWind}
      amanecer={sunRise}
      atardecer={sunSet}
      tempPorHora={tempPorHora}
      />
    </div>
  );
}

export default App;
