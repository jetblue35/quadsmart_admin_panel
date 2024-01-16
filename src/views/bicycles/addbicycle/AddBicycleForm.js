// ** React Imports
import { useState } from 'react'

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
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  const [fare, setFare] = useState('')

  const handleFareChange = event => {
    setFare(event.target.value)
  }
  // ** States
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  const [confirmPassValues, setConfirmPassValues] = useState({
    password: '',
    showPassword: false
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleConfirmPassChange = prop => event => {
    setConfirmPassValues({ ...confirmPassValues, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleClickConfirmPassShow = () => {
    setConfirmPassValues({ ...confirmPassValues, showPassword: !confirmPassValues.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <Card>
      <CardHeader title='Basic' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField fullWidth label='BatteryPercentage' placeholder='69' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Latitude' placeholder='90.005' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Longitude' placeholder='-50.005' />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id='fare-label'>Fare</InputLabel>
              <Select
                labelId='fare-label'
                id='fare'
                value={fare}
                fullWidth
                label='fare'
                onChange={handleFareChange}
                placeholder='Normal'
              >
                <MenuItem autoFocus={true} selected={true} value={'NORMAL FARE'}>
                  Normal
                </MenuItem>
                <MenuItem value={'X FARE'}>x</MenuItem>
                <MenuItem value={'Y FARE'}>y</MenuItem>
              </Select>
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
                <Button type='submit' variant='contained' size='large'>
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
