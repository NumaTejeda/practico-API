import './Panel.css';


function Panel(props){

    return(
        <div className='panel'>
            <h4>{props.title}</h4>
            <h1>{props.dataNumber}</h1>
            <p>{props.dataString}</p>
        </div>
    )
}

export default Panel;