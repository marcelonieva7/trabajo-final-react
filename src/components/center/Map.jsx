// @ts-nocheck
import React from 'react'
import Leaflet from 'leaflet'
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import icon from 'leaflet/dist/images/marker-icon.png'
import { Skeleton } from '@chakra-ui/react'

const DefaultIcon = Leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
})
Leaflet.Marker.prototype.options.icon = DefaultIcon

const Map = ({ coordenades, loading, name }) => {
  const { lat, lon } = coordenades || {}
  const position = [lat || -29.412733839225506, lon || -66.85607393546375]
  return (
    <Skeleton isLoaded={!loading} mt="4" w={{ base: '90vw', md: '40vw' }}>
      <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            {name}
          </Popup>
        </Marker>
      </MapContainer>
    </Skeleton>
  )
}

export default Map
