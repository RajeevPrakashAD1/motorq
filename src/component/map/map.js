import { Marker, Popup } from 'leaflet';
import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import './../../App.css';
import Header from './../header/header';
import './../../App.css';

function LocationMarker() {
	const [ position, setPosition ] = useState(null);
	const map = useMapEvents({
		click() {
			map.locate();
		},
		locationfound(e) {
			setPosition(e.latlng);
			map.flyTo(e.latlng, map.getZoom());
		}
	});

	return position === null ? null : (
		<Marker position={position}>
			<Popup>You are here</Popup>
		</Marker>
	);
}
const MyMap = () => {
	const position = [ 51.505, -0.09 ];
	return (
		<React.Fragment>
			<Header />
			<div id="map" />
			<div>map</div>
			<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
				<TileLayer
					attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{/* <Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker> */}
			</MapContainer>
		</React.Fragment>
	);
};
export default MyMap;
