import Highlights from "./Highlights/Highlights";
import './Right.css';
import Grafico from "./Today/Grafico";

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

    // const BotonDescargar = () => {
    //     return (
    //         <button>

    //             <Icon icon="clarity:download-cloud-line" />
    //         </button>

    //     );
    // };
    return (
        <div className='right'>
            <select className="selectCiudades" onChange={handleSelectChange}>
                {options}
            </select>
            <h1 id="titleToDay">Hoy</h1>
            {/* <Today data={data} loading={loading} /> */}
            <Grafico
                data={data}
            />
            <h1 id="titleHighlights">Info</h1>
            <Highlights data={data} loading={loading} obtenerHora={obtenerHora} />
        </div>
    )
}
export default Right;

//USER LOCATION
// const getUserLocation = () => {
//     if (navigator.geolocation) {
//       // what to do if supported
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           // what to do once we have the position
//           // save the geolocation coordinates in two variables
//           const { latitude, longitude } = position.coords;
//           // update the value of userlocation variable
//           setUserLocation({ latitude, longitude });
//         },
//         (error) => {
//           // display an error if we cant get the users position
//           console.error('Error getting user location:', error);
//         }
//       );
//     }
//     else {
//       // display an error if not supported
//       console.error('Geolocation is not supported by this browser.');
//     }
//   };
//   function handleCurrentLocation(){
//     getUserLocation();
//     console.log(userLocation);
//   }