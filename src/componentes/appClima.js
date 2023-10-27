
import Left from "./Left/Left";
import Right from "./Rigth/Right";
import { useEffect, useState } from "react";
import './appClima.css';

function AppClima() {
    
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
    }, [loading]);

    ////// FUNCION RECARGAR
    function recargar() {
        setLoading(true);
    }
    return (
        <div className="AppClima">
            <Left
                data={data}
                loading={loading}
                recargar={() => recargar()}
            />
            <Right
                data={data}
                loading={loading}
            />
        </div>
    )
}
export default AppClima;