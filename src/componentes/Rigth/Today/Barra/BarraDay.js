import './BarraDay.css';
function BarraDay(props){

    return(
        <div className='barraDay'>
            <div id='barra'></div>
            <p id='hora'>{props.horaDia}</p>
        </div>
    )
}

export default BarraDay;