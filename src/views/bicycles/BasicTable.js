// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Button from '@mui/material/Button'
import TableContainer from '@mui/material/TableContainer'
import { CursorDefault } from 'mdi-material-ui'
import QRCode from 'qrcode'
import React, { useEffect, useState } from 'react'

const BasicTable = ({ columns, data, handleDelete }) => {
  const [qrCodes, setQrCodes] = useState({})

  useEffect(() => {
    const generateQRCodes = async () => {
      const newQRCodes = {}
      for (const row of data) {
        newQRCodes[row.id] = await QRCode.toDataURL(`${row.id}`)
      }
      setQrCodes(newQRCodes)
    }

    generateQRCodes()
  }, [data])

  const hasUserIdColumn = columns.some(column => column.id === 'user_id')

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map(column => (
                <TableCell key={column.id}>{row[column.id]}</TableCell>
              ))}

              <TableCell>
                <div style={{ display: hasUserIdColumn ? 'none' : 'inline-block' }}>
                  <a href={qrCodes[row['id']]} download={'qrcode.png'}>
                    <img width={60} src={qrCodes[row['id']]} />
                  </a>
                </div>

                <img
                  style={{ cursor: 'pointer' }}
                  width={30}
                  src='../../../images/misc/delete.png'
                  onClick={() => handleDelete(rowIndex)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BasicTable
