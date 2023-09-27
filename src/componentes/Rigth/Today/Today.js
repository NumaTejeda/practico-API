import BarraDay from './Barra/BarraDay';
import './Today.css';

function Today(){

    return(
        <div className="today">
            <div>
                <ul>
                    <li>40</li>
                    <li>20</li>
                    <li>0</li>
                </ul>
            </div>
            <BarraDay
                horaDia="7:00am"
            />
            <BarraDay
                horaDia="7:00am"    
            />
            <BarraDay
                horaDia="7:00am"
            />
            <BarraDay
                horaDia="7:00am"
            />
            <BarraDay
                horaDia="7:00am"
            />
            <BarraDay
                horaDia="7:00am"
            />
            <BarraDay
                horaDia="7:00am"
            />
        </div>
    )
}

export default Today;