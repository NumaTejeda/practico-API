import './Left.css';
import nube from '../nube.png';

function Left({ data, loading }) {

    const currentTemp = data?.current_weather?.temperature;
    const currentDayCode = data?.current_weather.is_day;
    const toDay = data?.daily?.time[currentDayCode];
    const highToDay = data?.daily?.temperature_2m_max[currentDayCode];
    const lowToDay = data?.daily?.temperature_2m_min[currentDayCode];

    return (
        <div className="left">
            {data && !loading ? 
            <>
                <h1>{toDay} {currentTemp + '°'}</h1>
                <img src={nube} alt="nube" id="img"></img>
                <div>
                    <h2>High: {highToDay}°</h2>
                    <h2>Low: {lowToDay}°</h2>
                </div>
            </>
            :                   
            <>
                <h1>Cargandoooo......</h1>
                <img src={nube} alt="nube" id="img"></img>
                <div>
                    <h2>High: Cargando....</h2>
                    <h2>Low: Cargando...</h2>
                </div>
            </>
        }
        </div>
    )
}

export default Left;