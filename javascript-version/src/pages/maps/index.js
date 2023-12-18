import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const Maps = () => {
  const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiZW1yYWhrdWN1ayIsImEiOiJjbHFiYm5qZWwxeDNzMmtudjZ1NmVvNW5tIn0.vdiKiWjmM2zVWfPw_lA98Q'
  })
  return (
    <div>
      <Map
        style='mapbox://styles/mapbox/streets-v9'
        containerStyle={{
          height: '75vh',
          width: '75vw'
        }}
      >
        <Layer type='symbol' id='marker' layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
    </div>
  )
}

export default Maps

// in render()
