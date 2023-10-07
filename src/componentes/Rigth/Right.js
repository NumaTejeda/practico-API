import Highlights from "./Highlights/Highlights";
import Today from "./Today/Today";
import './Right.css';
function Right(props){


    return(
        <div className='right'>
            <h1>Today</h1>
            <Today datos={props}/>
            <h1>Highlights</h1>
            <Highlights datos={props}/>
        </div>
    )
}
export default Right;