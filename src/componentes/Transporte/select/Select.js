import './Select.css';
function Select({ setFiltro, data }) {

    const handleSelectChange = (event) => {
        console.log(event.target.value)
        setFiltro(event.target.value); // Actualiza el estado con la opción seleccionada.
    };

    const sinDuplicados = new Set();
    const options = data ? data.map((item, index) => {
        if (!sinDuplicados.has(item.route_short_name)) {
            sinDuplicados.add(item.route_short_name);
            return (
                <option value={item.route_short_name} key={index}>
                    {item.route_short_name}
                </option>
            );
        }
        return null; // Omitir opciones duplicadas
    }) : null;
    
    return (
        <>
            <select
                name="bondis"
                className='select-bondis'
                onChange={handleSelectChange}>
                {options}
            </select>
        </>
    )
}

export default Select;