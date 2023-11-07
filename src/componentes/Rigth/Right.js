import Highlights from "./Highlights/Highlights";
import Today from "./Today/Today";
import './Right.css';
function Right({ data, loading, obtenerHora, coordenadasCity, setCity }) {
    
    const handleSelectChange = (e) => {
        setCity(e.target.value); // Actualiza el estado con la opción seleccionada.
    };
    const options = Object.keys(coordenadasCity).map((cityName) => {
        return (
            <option value={cityName} key={cityName}>
                {cityName}
            </option>
        )
    })

    return (
        <div className='right'>
            <select className="selectCiudades" onChange={handleSelectChange}>
                {options}
            </select>
            <h1 id="titleToDay">Hoy</h1>
            <Today data={data} loading={loading} />
            <h1 id="titleHighlights">Info</h1>
            <Highlights data={data} loading={loading} obtenerHora={obtenerHora} />
        </div>
    )
}
export default Right;