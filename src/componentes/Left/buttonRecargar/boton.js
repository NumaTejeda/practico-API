import './boton.css';
function boton({ recargar }) {
    return (
        <button onClick={recargar} className='buttonRecargar'>Recargar</button>
    )
}
export default boton;