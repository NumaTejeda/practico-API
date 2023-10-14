import './Left.css';
import nube from '../nube.png';
import Boton from './buttonRecargar/boton';

function Left({ data, loading, recargar }) {

    const currentTemp = data?.current_weather?.temperature;
    const toDay = data?.daily?.time[0];
    const highToDay = data?.daily?.temperature_2m_max[0];
    const lowToDay = data?.daily?.temperature_2m_min[0];
    // (idea) useState para src y otro para frase que acompaña, con codigoClima que busca dentro del json de codigos.
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
                    <Boton recargar={recargar} />
                </>
                :
                <>
                    <h4 style={{ color: 'white' }}>Cargandoooo......</h4>
                    <img src={nube} alt="nube" id="img"></img>
                    <div>
                        <h4 style={{ color: 'white' }}>High: cargando... </h4>
                        <h4 style={{ color: 'white' }}>Low: Cargando...</h4>
                    </div>
                </>
            }
        </div>
    )
}

export default Left;