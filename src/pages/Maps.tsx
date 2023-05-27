import React from 'react'
import { MapContainer,TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";


const Maps = () => {
  return (
    <div style={{height:'100vh'}}>
      <div className="text-2xl leading-5" style={{ letterSpacing: '0.5em', padding:'1vh', fontFamily:'monospace' }}>
        Maps
      </div>
      <MapContainer style={{ height: "80vh", borderRadius:'10px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} center={[20, 30]} zoom={2}>
      <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}

export default Maps
