import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

function MapView({ coordinates }) {
  const mapRef = useRef(null)

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.API_KEY, // Replace with your actual API key
      version: 'weekly'
    })

    loader.load().then(() => {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: coordinates[0].latitude, lng: coordinates[0].longitude }, // Center map on the first coordinate
        zoom: 8
      })

      coordinates.forEach(coord => {
        const marker = new google.maps.Marker({
          map: map,
          position: { lat: coord.latitude, lng: coord.longitude }
        })
      })
    })
  }, [coordinates])

  return <div style={{ height: '600px' }} ref={mapRef} />
}

export default MapView
