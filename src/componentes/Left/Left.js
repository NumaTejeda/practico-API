import './Left.css';
import nube from '../nube.png';

function Left({diaActual, tempActual, maxTempToDay, lowTempToDay}){
    return(
        <div className="left">
            <h1>{diaActual} {tempActual + '°'}</h1>
            <img src={nube} alt="nube" id="img"></img>
            <div>
                <h2>High: {maxTempToDay}°</h2>
                <h2>Low: {lowTempToDay}°</h2>
            </div>
        </div>
    )
}

export default Left;