import Panel from "./Panel/Panel";
import './Highlights.css';

function Highlights({datos}){

    return(
        <div className="highlights">
            <Panel
                title='UV Index'
                dataNumber1={datos.indiceUV}
                dataString='Normal'
            />
            <Panel 
                title='Wind Status'
                dataNumber1={datos.velocidadViento}
                dataString='Tranqui'
            />
            <Panel 
                title='Sunrise & Sunset'
                dataNumber1={datos.amanecer + " AM"}
                dataNumber2={datos.atardecer + " PM"}
                dataString='Ta lindo'
            />
            <Panel
                title='Humedity'
                dataNumber1={datos.humedad + " %"}
                dataString='Normal'
            />
            <Panel 
                title='Visibility'
                dataNumber1={datos.visibilidad + " km"}
                dataString='Average'
            />
            <Panel
                title='Air Quality'
                dataNumber1={datos.calidadDeAire}
                dataString='Unhealthy'
                
            />
        </div>

    )
}

export default Highlights;