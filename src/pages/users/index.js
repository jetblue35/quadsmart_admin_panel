import React from 'react'

import Button from '@mui/material/Button'
import TableBasic from 'src/views/tables/TableBasic'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import BasicTable from 'src/views/bicycles/BasicTable'

const Users = () => {
  const columns = [
    { id: 'id', label: 'ID' },
    { id: 'first_name', label: 'FIRST NAME' },
    { id: 'last_name', label: 'LAST NAME' },
    { id: 'mail', label: 'E-MAIL' },
    { id: 'balance', label: 'BALANCE' },
    { id: 'password', label: 'PASSWORD' },
    { id: 'role', label: 'ROLE' }


  ]

  const data = [
    { id: 132, first_name: 'EMRAH', last_name: 'KUCUK', mail: 'mekucuk2018@gtu.edu.tr', balance: '28 TL' , password: '5f4dcc3b5aa765d61d8327deb882cf99', role: 'user'},
    { id: 62, first_name: 'JULIA', last_name: 'CURRY', mail: 'julia@hotmail.com', balance: '90 TL' , password: '6c569aabbf7775ef8fc5705a9f1f9b2f', role: 'user'}
  ]

  return (
    <div>
      <Button size='small' variant='contained' href='/bicycles/addbicycle'>
        Add Users
      </Button>
      <div>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Users Table' titleTypographyProps={{ variant: 'h6' }} />
              <BasicTable columns={columns} data={data} />
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Users
