import './Panel.css';


function Panel(props){

    return(
        <div className='panel'>
            <h5>{props.title}</h5>
            <h3>{props.dataNumber1}</h3>
            { props.dataNumber2 ? <h3>{props.dataNumber2}</h3> : null}
            <p>{props.dataString}</p>
        </div>
    )
}

export default Panel;