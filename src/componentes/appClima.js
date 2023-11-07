
import Left from "./Left/Left";
import Right from "./Rigth/Right";
import { useEffect, useState } from "react";
import './appClima.css';

function AppClima() {

    const coordenadasCity = require("./coordenadasCity.json");
    const cityDefault = "La Plata";
    const [city, setCity] = useState(cityDefault);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);

    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${coordenadasCity[city].latitud}&longitude=${coordenadasCity[city].longitud}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,visibility,windspeed_10m,uv_index,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1`;

    useEffect(() => {
        // Realiza la solicitud utilizando fetch con el método GET
        fetch(apiUrl, {
            method: 'GET',
            redirect: 'follow',
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(console.log('UPS! Vuelvo a intentarlo mas tarde...'));
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
    }, [loading, apiUrl]);

    //Quedo colgado, cambia el brillo del fondo segun si es de dia o noche. (ERROR se applica todo no solo al fondo)
    const clase = {
        filter: `brightness(100%)`,
        backgroundImage: "url('https://www.fondoin.gob.ve/wp-content/uploads/2022/08/PORTADA.png')"
    }

    ////// FUNCION RECARGAR
    function recargar() {
        setLoading(true);
    }
    return (
        <div className="AppClima" style={clase}>
            <Left
                data={data}
                loading={loading}
                recargar={() => recargar()}
                />
            <Right
                setCity={setCity}
                coordenadasCity={coordenadasCity}
                data={data}
                loading={loading}
            />
        </div>
    )
}
export default AppClima;