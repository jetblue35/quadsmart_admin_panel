import { React, useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import Button from '@mui/material/Button'
import TableBasic from 'src/views/tables/TableBasic'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import BasicTable from 'src/views/bicycles/BasicTable'

const Users = () => {
  const [users, setUsers] = useState([])

  const columns = [
    { id: 'user_id', label: 'USER ID' },
    { id: 'first_name', label: 'FIRST NAME' },
    { id: 'last_name', label: 'LAST NAME' },
    { id: 'phone_number', label: 'PHONE NUMBER' },
    { id: 'mail', label: 'E-MAIL' },
    { id: 'balance', label: 'BALANCE' },
    { id: 'password', label: 'PASSWORD' }
  ]
  const router = useRouter()

  const handleDelete = async rowIndex => {
    const data = {
      user_id: users[rowIndex]['user_id'],
      api_key: process.env.API_KEY
    }

    const x_token = localStorage.getItem('token')

    const response = await fetch(`https://quadsmartapi-production.up.railway.app/v1/users`, {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
        'x-access-token': x_token
      }
    })

    const result = await response
    router.push('/users')
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
          'https://quadsmartapi-production.up.railway.app/v1/users?api_key=' + process.env.API_KEY,
          options
        )
        const data = await response.json()
        const users = data['users']
        if (Array.isArray(users) && users.length > 0) {
          // Map each object in the array to a new object with specific fields
          const rows = users.map(user => ({
            user_id: user['_id'],
            first_name: user['firstName'],
            last_name: user['lastName'],
            phone_number: user['phoneNumber'],
            mail: user['email'],
            balance: user['balance'] + ' TL',
            password: user['password']
          }))

          setUsers(rows)
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
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Users Table' titleTypographyProps={{ variant: 'h6' }} />
              <BasicTable columns={columns} data={users} handleDelete={handleDelete} />
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Users
