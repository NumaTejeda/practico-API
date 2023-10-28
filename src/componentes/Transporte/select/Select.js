import './Select.css';
function Select({ setFiltro, data }) {

    const handleSelectChange = (e) => {
        setFiltro(e.target.value); // Actualiza el estado con la opción seleccionada.
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
                <option value='inicio'>Eleji tu bondi</option>
                {options}
            </select>
        </>
    )
}

export default Select;