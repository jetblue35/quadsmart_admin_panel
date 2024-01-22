import React, { useState } from 'react'
import { Button, FormControl } from '@mui/material'

import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import AddBicycleForm from 'src/views/bicycles/addbicycle/AddBicycleForm'

const AddBicycle = () => {
  const [batteryPercentage, setBatteryPercentage] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  const handleSubmit = () => {
    console.log('handleSubmit')
  }

  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <AddBicycleForm />
        </Grid>
      </Grid>
    </div>
  )
}

export default AddBicycle
