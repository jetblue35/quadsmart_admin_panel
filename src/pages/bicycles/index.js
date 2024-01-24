import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import Button from '@mui/material/Button'
import TableBasic from 'src/views/tables/TableBasic'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import BasicTable from 'src/views/bicycles/BasicTable'

const Bicycles = () => {
  const [bicycles, setBicycles] = useState([])

  const columns = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'NAME' },
    { id: 'battery_percentage', label: 'BATTERY PERCENTAGE' },
    { id: 'latitude', label: 'LATITUDE' },
    { id: 'longitude', label: 'LONGITUDE' },
    { id: 'status', label: 'STATUS' }
  ]

  const router = useRouter()

  const handleDelete = async rowIndex => {
    // Add your delete logic here based on the rowIndex or row data
    console.log(bicycles[rowIndex]['id'])
    const data = {
      scooter_id: bicycles[rowIndex]['id'],
      api_key: process.env.API_KEY
    }

    const x_token = localStorage.getItem('token')

    const response = await fetch(`https://rentalmanagementapi-production.up.railway.app/v1/scooters`, {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
        'x-access-token': x_token
      }
    })

    const result = await response
    console.log(result)
    router.push('/bicycles')
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api_key = process.env.API_KEY
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
            id: bike['_id'],
            name: bike['name'],
            battery_percentage: bike['battery'],
            latitude: bike['coordinates']['latitude'],
            longitude: bike['coordinates']['longitude'],
            status: bike['status']
          }))

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
      <div>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Bicycle Table' titleTypographyProps={{ variant: 'h6' }} />
              <BasicTable columns={columns} data={bicycles} handleDelete={handleDelete} />
            </Card>
          </Grid>
        </Grid>
        <Button size='small' variant='contained' href='/bicycles/addbicycle'>
          Add Bicycle
        </Button>
      </div>
    </div>
  )
}

export default Bicycles
