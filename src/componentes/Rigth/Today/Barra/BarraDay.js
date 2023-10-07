import './BarraDay.css';
function BarraDay(props){


    return(
        <div className='barraDay'>
            <div id='barra' style={{height: props.altura}}></div>
            <p id='hora'>{props.horaDia}</p>
        </div>
    )
}

export default BarraDay;