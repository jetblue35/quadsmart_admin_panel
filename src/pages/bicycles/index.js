import React from 'react'

import Button from '@mui/material/Button'
import TableBasic from 'src/views/tables/TableBasic'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import BasicTable from 'src/views/bicycles/BasicTable'

const Bicycles = () => {
  const columns = [
    { id: 'id', label: 'ID' },
    { id: 'battery_percentage', label: 'BATTERY PERCENTAGE' },
    { id: 'latitude', label: 'LATITUDE' },
    { id: 'longitude', label: 'LONGITUDE' },
    { id: 'fare', label: 'FARE' }
  ]

  const data = [
    { id: 132, battery_percentage: '85', latitude: '90.05', longitude: '-90.00', fare: 'NORMAL' },
    { id: 12, battery_percentage: '26', latitude: '102.56', longitude: '-10.43', fare: 'NORMAL' }
  ]

  return (
    <div>
      <Button size='small' variant='contained' href='/bicycles/addbicycle'>
        Add Bicycle
      </Button>
      <div>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Bicycle Table' titleTypographyProps={{ variant: 'h6' }} />
              <BasicTable columns={columns} data={data} />
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Bicycles
