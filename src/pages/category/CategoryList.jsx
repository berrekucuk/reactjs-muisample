import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button,Stack } from '@mui/material'

function CategoryList() {

    const [categories, setcategories] = useState([])

    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.1
        },
        {
            field: "name",
            headerName: "Name",
            flex: 0.2
        },
        {
            field: "description",
            headerName: "Description",
            flex: 0.3
        },
        {
            field: "Detail",
            headerName: "Detail",
            flex: 0.15,
            renderCell: (item) => <Button variant="contained" color="inherit">Detail</Button>
        },
        {
            field: "Update",
            headerName: "Update",
            flex: 0.15,
            renderCell: (item) => <Button variant="contained" color="inherit" >Update</Button>
        },
        {
            field: "Delete",
            headerName: "Delete",
            flex: 0.1,
            renderCell: (item) => <Button variant="contained" color="error" >Delete</Button>
        }
    ]

    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/categories")
            .then(res => setcategories(res.data))
    })

    return <>
        <Stack direction="row" justifyContent="flex-end">
            <Button  sx={{ width: 150 }} variant='contained' >Add New</Button>
        </Stack>
        <hr />
        <div>
            <DataGrid
                rows={categories}
                columns={columns}
                slots={{ toolbar: GridToolbar }}
            />
        </div>
    </>
}

export default CategoryList