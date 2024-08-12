import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button,CircularProgress,Stack, Box } from '@mui/material'
import { Height } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

function CategoryList() {

    const [categories, setcategories] = useState([])
    const [loading, setloading] = useState(true)

    const navigate = useNavigate()

    const {enqueueSnackbar} = useSnackbar()

    useEffect(() => {
       loadData()
    },[])

    const loadData = () =>{
        axios.get("https://northwind.vercel.app/api/categories")
        .then(res => {
            setcategories(res.data)
            setloading(false)
        })
    }

    const deleteCategory = (id) => {
        axios.delete("https://northwind.vercel.app/api/categories/" + id)
        .then(res => {
            enqueueSnackbar("Deleted!!",{
                variant: "error"
            })
            loadData()
        })
    }

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
            renderCell: (item) => <Button onClick={() => navigate("/category/detail/" + item.id)} variant="contained" color="inherit">Detail</Button>
        },
        {
            field: "Update",
            headerName: "Update",
            flex: 0.15,
            renderCell: (item) => <Button onClick={() => navigate("/category/update/" + item.id)} variant="contained" color="inherit" >Update</Button>
        },
        {
            field: "Delete",
            headerName: "Delete",
            flex: 0.1,
            renderCell: (item) => <Button onClick={() => deleteCategory(item.row.id)} variant="contained" color="error" >Delete</Button>
        }
    ]



    return <>
        <Stack direction="row" justifyContent="flex-end">
            <Button onClick={()=> navigate("/category/add")} sx={{ width: 150 }} variant='contained' >Add New</Button>
        </Stack>
        <hr />
        <div style={{ height: 400 }}> 
            {
                loading == true ? <Box sx={{display:"flex", justifyContent:"center", alignItem:"center", height:"100vh"}}>
                <CircularProgress/>
            </Box> : <DataGrid
                rows={categories}
                columns={columns}
                slots={{ toolbar: GridToolbar }}
                />
            }
            
        </div>
    </>
}

export default CategoryList