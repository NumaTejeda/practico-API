import Highlights from "./Highlights/Highlights";
import Today from "./Today/Today";

function Right(){
    return(
        <div className='right'>
            <h1>Today</h1>
            <Today/>
            <h1>Highlights</h1>
            <Highlights/>
        </div>

    )
}
export default Right;