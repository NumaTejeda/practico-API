import './TransporteApp.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState, useEffect } from 'react';
import { icon } from 'leaflet';
import Select from './select/Select';



function TransporteApp() {
    //const data = require('./tranporte.json');

    const greenIcon = new icon({
        iconUrl:'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const [data, setData] = useState(null);
    const [filtro, setFiltro] = useState(""); // Estado para almacenar la opción seleccionada.

    const url = 'https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?agency_id=16&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6&route_short_name=108A';
    useEffect(() => {
        // Realiza la solicitud utilizando fetch con el método GET
        fetch(url, {
            method: 'GET',
            redirect: 'follow',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(alert('UPS! Vuelvo a intentarlo mas tarde...'));
                }
                return response.json();
            })
            .then((responseData) => {
                // Almacena los datos en la variable de estado 'data'
                setData(responseData);
                //setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    //icon={blueIcon}

    const mappedData = data ? data.filter((item) => filtro === "" || item.route_short_name === filtro)
        .map((item, index) => (
            <Marker position={[item.latitude, item.longitude]} key={index} icon={greenIcon}>
                <Popup>
                    {item.route_short_name + " "}
                    {item.trip_headsign}
                </Popup>
            </Marker>
        )) : null;

    return (
        <>
            <div id='AppTransporte'>
                <MapContainer center={[-34.605425, -58.381555]} zoom={12} scrollWheelZoom={false}>
                    <Select setFiltro={setFiltro} data={data} />
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