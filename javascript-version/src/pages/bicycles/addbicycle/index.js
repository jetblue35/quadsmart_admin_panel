import React, { useState } from 'react';
import { Button, FormControl } from '@mui/material';

const AddBicycle = () => {
  const [batteryPercentage, setBatteryPercentage] = useState('');
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()

  const handleSubmit = () => {
    console.log("handleSubmit")
    console.log(batteryPercentage)
    console.log(latitude)
    console.log(longitude)
  };

  return (
    <div>
      <FormControl onSubmit={handleSubmit}>
        <label htmlFor="name">Battery Percentage</label>
        <input
          type="number"
          name="name"
          id="name"
          onChange={(e) => setBatteryPercentage(e.target.value)}
        />

        <label htmlFor="name">Latitude</label>
        <input
          type="number"
          name="name"
          id="name"
          onChange={(e) => setLatitude(e.target.value)}
        />

        <label htmlFor="name">Longitude</label>
        <input
          type="number"
          name="name"
          id="name"
          onChange={(e) => setLongitude(e.target.value)}
        />


        <Button type="submit" onClick={() => handleSubmit()}>Submit</Button>
      </FormControl>
    </div>
  );
};

export default AddBicycle;
