import './TransporteApp.css';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import { useState, useEffect } from 'react';
import { icon } from 'leaflet';
import Select from './select/Select';
import SHADOW from '../../assets/transporteSVG/marker-shadow.png';
import colores from './markerColor';

function TransporteApp() {

    const coordenadasDefault = [-34.605425, -58.381555];
    const [puntoMedio, setPuntoMedio] = useState(coordenadasDefault);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [filtro, setFiltro] = useState("inicio"); // Estado para almacenar la opción seleccionada.
    const COLOR = data ? colores[filtro] : null;

    const colorIcon = new icon({
        iconUrl: `${COLOR}`,
        shadowUrl: `${SHADOW}`,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    const url = 'https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?agency_id=16&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6&route_short_name=108A';
    const fetchTransporte = () => fetch(url, {
        method: 'GET',
        redirect: 'follow',
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(console.log('UPS! Vuelve a intentarlo mas tarde...'));
            }
            return response.json();
        })
        .then((responseData) => {
            // Almacena los datos en la variable de estado 'data'
            setData(responseData);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });

    useEffect(() => { fetchTransporte() }, [loading]);
    useEffect(() => {
        const pedidoAPI = setInterval(() => {
            fetchTransporte();
        }, 31000)
        fetchTransporte();
        return () => clearInterval(pedidoAPI);
    }, [])


    function actualizar() {
        setLoading(true);
    }

    
    const mappedData = data ? data.filter((item) => filtro === "" || item.route_short_name === filtro)
    .map((item, index) => (
            <Marker position={[item.latitude, item.longitude]} key={index} icon={colorIcon}>
                <Popup>
                    {item.route_short_name + " "}
                    {item.trip_headsign}
                </Popup>
            </Marker>
        )) : null;
    // function Vista() {
    //     const map = useMap();
    //     map.setView(puntoMedio, 10);
    //     return null;
    // };
    const calcularPuntoMedio = () => {
        let seleccion = data ? data.filter((item) => item.route_short_name === filtro) : null;
        console.log(seleccion)
        let sumX = 0;
        let sumY = 0;
        let division = 0;
        for (let i = 0; i < seleccion.length; i++) {
            sumX += seleccion[i]["longitude"];
            sumY += seleccion[i]["latitude"];
            division += 1;
        }
        const middlePoint = [sumX / division, sumY / division];
        setPuntoMedio(middlePoint);
    };

    return (
        <>
            <div id='AppTransporte'>
                <MapContainer center={[puntoMedio[0], puntoMedio[1]]} zoom={11} scrollWheelZoom={true}>
                    <Select setFiltro={setFiltro} data={data} calcularPuntoMedio={calcularPuntoMedio} />
                    <button className='actualizar' onClick={actualizar}>Actualizar</button>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {mappedData}
                </MapContainer>
            </div>
        </>
    )
}
export default TransporteApp;


