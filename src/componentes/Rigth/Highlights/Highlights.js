import Panel from "./Panel/Panel";
import './Highlights.css';

function Highlights({ data, loading }) {

    //// FUNCION OBTENER HORA LOCAL FORMATO hh
    const obtenerHora = () => {
        const fecha = new Date();
        const horas = fecha.getHours();

        // Verificar si las horas son menores a 10 y devolver solo la segunda cifra
        const horaEnFormatoHH = horas < 10 ? horas : horas.toString();

        console.log(horaEnFormatoHH);
        return horaEnFormatoHH;
    }
    setInterval(obtenerHora, 3600000);
    const hora = obtenerHora();

    const humedity = data?.hourly?.relativehumidity_2m[0]; //elijo cualquier hora
    const visibility = data?.hourly?.visibility[hora] / 1000;
    const precipitation_probability = data?.hourly?.precipitation_probability[hora];
    const uvIndex = data?.hourly?.uv_index[hora];
    const speedWind = data?.hourly?.windspeed_10m[hora];
    const sunRise = data?.daily?.sunrise[0].split('T')[1];
    const sunSet = data?.daily?.sunset[0].split('T')[1];

    return (
        <div className="highlights">
            {data && !loading ?
                <>
                    <Panel
                        title='UV Index'
                        dataNumber1={uvIndex}
                        dataString='Normal'
                    />
                    <Panel
                        title='Wind Status'
                        dataNumber1={speedWind+"km/h"}
                        dataString='Tranqui'
                    />
                    <Panel
                        title='Sunrise & Sunset'
                        dataNumber1={sunRise + " AM"}
                        dataNumber2={sunSet + " PM"}
                        dataString='Ta lindo'
                    />
                    <Panel
                        title='Humedity'
                        dataNumber1={humedity + " %"}
                        dataString='Normal'
                    />
                    <Panel
                        title='Visibility'
                        dataNumber1={visibility + " km"}
                        dataString='Average'
                    />
                    <Panel
                        title='Prob. de lluvia'
                        dataNumber1={precipitation_probability + " %"}
                        dataString='Unhealthy'

                    />
                </>
                :
                <>
                    <Panel
                        title='UV Index'
                        dataNumber1="00"
                        dataString='Normal'
                    />
                    <Panel
                        title='Wind Status'
                        dataNumber1="00"
                        dataString='Tranqui'
                    />
                    <Panel
                        title='Sunrise & Sunset'
                        dataNumber1="00 AM"
                        dataNumber2="00 PM"
                        dataString='Ta lindo'
                    />
                    <Panel
                        title='Humedity'
                        dataNumber1="00 %"
                        dataString='Normal'
                    />
                    <Panel
                        title='Visibility'
                        dataNumber1="00 km"
                        dataString='Average'
                    />
                    <Panel
                        title='Prob. de lluvia'
                        dataNumber1="00 %"
                        dataString='Unhealthy'

                    />
                </>


            }
        </div>

    )
}

export default Highlights;