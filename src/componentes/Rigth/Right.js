import Highlights from "./Highlights/Highlights";
import Today from "./Today/Today";
import './Right.css';
function Right({ data, loading, obtenerHora }) {


    return (
        <div className='right'>
            <h1>Today</h1>
            <Today data={data} loading={loading} />
            <h1>Highlights</h1>
            <Highlights data={data} loading={loading} obtenerHora={obtenerHora} />
        </div>
    )
}
export default Right;