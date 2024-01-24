import React, { useEffect, useState } from 'react'
import Map from '../../views/maps/MapView'
import { ConsoleNetworkOutline } from 'mdi-material-ui'

const Maps = () => {
  const [bicycles, setBicycles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const x_token = localStorage.getItem('token')

        const options = {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'x-access-token': x_token
          }
        }

        const response = await fetch(
          'https://rentalmanagementapi-production.up.railway.app/v1/scooters?api_key=' + process.env.API_KEY,
          options
        )
        const data = await response.json()
        const bicycles = data['scooters']
        if (Array.isArray(bicycles) && bicycles.length > 0) {
          // Map each object in the array to a new object with specific fields
          const rows = bicycles.map(bike => ({
            latitude: bike['coordinates']['latitude'],
            longitude: bike['coordinates']['longitude']
          }))

          console.log(rows)
          setBicycles(rows)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <Map coordinates={bicycles} />
    </div>
  )
}

export default Maps

// in render()
