import Panel from "./Panel/Panel";
import './Highlights.css';

function Highlights({data, obtenerHora}){

   

    const humedity = data?.hourly?.relativehumidity_2m[0]; //elijo cualquier hora
    const visibility = data?.hourly?.visibility[4]/1000;
    const precipitation_probability = data?.hourly?.precipitation_probability[0];
    const uvIndex = data?.hourly?.uv_index[0];
    const speedWind = data?.hourly?.windspeed_10m[0];
    const sunRise = data?.daily?.sunrise[0].split('T')[1];
    const sunSet = data?.daily?.sunset[0].split('T')[1];

    return(
        <div className="highlights">
            <Panel
                title='UV Index'
                dataNumber1={uvIndex}
                dataString='Normal'
            />
            <Panel 
                title='Wind Status'
                dataNumber1={speedWind}
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
                dataNumber1={visibility+ " km"}
                dataString='Average'
            />
            <Panel
                title='Prob. de lluvia'
                dataNumber1={precipitation_probability+" %"}
                dataString='Unhealthy'
                
            />
        </div>

    )
}

export default Highlights;