import BarraDay from './Barra/BarraDay';
import './Today.css';
function Today({ data }) {

    const temp07 = data?.hourly?.temperature_2m[7].toString() + "px";
    const temp09 = data?.hourly?.temperature_2m[9].toString() + "px";
    const temp11 = data?.hourly?.temperature_2m[11].toString() + "px";
    const temp12 = data?.hourly?.temperature_2m[12].toString() + "px";
    const temp14 = data?.hourly?.temperature_2m[14].toString() + "px";
    const temp16 = data?.hourly?.temperature_2m[16].toString() + "px";
    const temp18 = data?.hourly?.temperature_2m[18].toString() + "px";

    return (
        <div className="today">
            <div className="ejeX">
                <ul>
                    <li>40</li>
                    <li>20</li>
                    <li>0</li>
                </ul>
            </div>
            <BarraDay
                horaDia="7:00"
                altura={temp07}
            />
            <BarraDay
                horaDia="9:00"
                altura={temp09}
            />
            <BarraDay
                horaDia="11:00"
                altura={temp11}
            />
            <BarraDay
                horaDia="12:00"
                altura={temp12}
            />
            <BarraDay
                horaDia="14:00"
                altura={temp14}
            />
            <BarraDay
                horaDia="16:00"
                altura={temp16}
            />
            <BarraDay
                horaDia="18:00"
                altura={temp18}
            />
        </div>
    )
}

export default Today;