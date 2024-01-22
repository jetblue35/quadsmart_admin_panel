// ** React Imports
import { useState } from 'react'

import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

const AddBicycleForm = () => {
  const router = useRouter()

  const [values, setValues] = useState({
    city: '',
    battery: '',
    latitude: '',
    longitude: ''
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const add = async () => {
    const data = {
      owner: values.city,
      longitude: values.longitude,
      latitude: values.latitude,
      battery: values.battery,
      status: 'Available',
      api_key: process.env.api_key
    }
    const x_token = localStorage.getItem('token')
    const response = await fetch(`rental_management_api.railway.internal/v1/scooters`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'x-access-token': x_token,
        'content-type': 'application/json'
      }
    })
    const result = await response
    router.push('/bicycles')
  }

  return (
    <Card>
      <CardHeader title='Basic' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField fullWidth label='City' placeholder='Kocaeli' onChange={handleChange('city')} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Battery Percentage' placeholder='69' onChange={handleChange('battery')} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Latitude' placeholder='90.005' onChange={handleChange('latitude')} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Longitude' placeholder='-50.005' onChange={handleChange('longitude')} />
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Button type='submit' variant='contained' size='large' onClick={add}>
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default AddBicycleForm
