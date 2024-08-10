import { Button } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CustomerDataGrid() {
    const [customers, setcustomers] = useState([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        axios.get("https://northwind.vercel.app/api/customers")
        .then(res => {
            setcustomers(res.data)
        })
    }


    const deleteCustomer = (item) => {

        var result = window.confirm("Are u sure?")

        if(result){
            axios.delete(`https://northwind.vercel.app/api/customers/${item.id}`)
            .then(res => {
                loadData();
            })
        }

    }

    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.1
        },
        {
            field: "companyName",
            headerName: "Şirket Adı",
            flex: 0.2
        },
        {
            field: "contactName",
            headerName: "İletişim",
            flex: 0.2
        },
        {
            field: "contactTitle",
            headerName: "Title",
            flex: 0.2,
            renderCell: (data) => <h3>{data.row.contactTitle}</h3>
        },
        {
            field: "City",
            headerName: "City",
            flex: 0.1,
            renderCell: (data) => <>{data.row.address.city}</>

        },
        {
            field:"delete",
            headerName:"Delete",
            flex:0.2,
            renderCell:(data) => <Button onClick={() => deleteCustomer(data.row)} color="error" variant="contained">Delete</Button>
        }
    ]

    return <>
        <DataGrid
            rows={customers}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
        />
    </>
}

export default CustomerDataGrid