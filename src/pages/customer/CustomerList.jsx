import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../api/axiosInstance'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

function CustomerList() {

  const [customers, setcustomers] = useState([])

  useEffect(() => {

    loadCustomers()
  }, [])

  const loadCustomers =() =>{
    axiosInstance.get("customers")
      .then(res => {
        setcustomers(res.data)
      })
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.2
    },
    {
      field: "companyName",
      headerName: "Company Name",
      flex: 0.2
    },
    {
      field: "contactName",
      headerName: "Contact Name",
      flex: 0.2
    },
    {
      field: "Delete",
      headerName: "Delete",
      flex: 0.2,
      renderCell: (params) =>{
        return <Button variant="contained" color="error" onClick={() => deleteCustomer(params.row.id)}>Delete</Button>
      }
    }

  ]

  const deleteCustomer =(id) =>{
    axiosInstance.delete("customers/" + id)
    .then(res => {
      loadCustomers()
    })
  }

  return <>
    <div style={{ height: 400, width: '100%' }}>
      <Link to="/customers/add">Add Customer</Link>
      <hr/>
      <DataGrid
        rows={customers}
        columns={columns}
      />
    </div>
  </>
}

export default CustomerList