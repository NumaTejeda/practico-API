import './Left.css';
import nube from '../nube.png';
import Boton from './buttonRecargar/boton';

function Left({ data, loading, recargar }) {

    const currentTemp = data?.current_weather?.temperature;
    const toDay = data?.daily?.time[0];
    const highToDay = data?.daily?.temperature_2m_max[0];
    const lowToDay = data?.daily?.temperature_2m_min[0];

    return (
        <div className="left">
            {data && !loading ?
                <>
                    <h1>{toDay} {currentTemp + '°C'}</h1>
                    <img src={nube} alt="nube" id="img"></img>
                    <div>
                        <h2>Alta: {highToDay}°</h2>
                        <h2>Baja: {lowToDay}°</h2>
                    </div>
                    <Boton recargar={recargar} />
                </>
                :
                <>
                    <h1 style={{ color: 'white' }}>......</h1>
                    <img src={nube} alt="nube" id="img"></img>
                    <div>
                        <h2 style={{ color: 'white' }}>High: ... </h2>
                        <h2 style={{ color: 'white' }}>Low: ...</h2>
                    </div>
                    <Boton recargar={recargar} />

                </>
            }
        </div>
    )
}

export default Left;