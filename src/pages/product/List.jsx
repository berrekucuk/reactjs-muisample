import React, { useContext, useEffect, useState } from 'react'
import { axiosIntance } from '../../api/axiosInstance'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { CircularProgress, Box, Button, Stack, IconButton } from '@mui/material'
import { baseService } from '../../api/baseService'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { FavoritesContext } from '../../context/FavoritesContext'

function List() {

    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(true)

    const { enqueueSnackbar } = useSnackbar()

    const { favOperation,favorites } = useContext(FavoritesContext)

    const navigate = useNavigate()

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        baseService.getAll("products")
            .then(data => {
                setproducts(data)
                setloading(false)
            })
    }



    const deleteProduct = (row) => {
        baseService.delete("products", row.id)
            .then(res => {
                enqueueSnackbar(row.name + " " + "deleted", {
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
            field: "unitPrice",
            headerName: "Unit Price",
            flex: 0.1
        },
        {
            field: "unitsInStock",
            headerName: "Stock",
            flex: 0.15
        },
        {
            field: "quantityPerUnit",
            headerName: "Quantity Per Unit",
            flex: 0.2
        },
        {
            field: "Update",
            headerName: "Update",
            flex: 0.1,
            renderCell: (item) => <Button onClick={() => navigate("/products/update/" + item.row.id)} variant="contained" color="inherit" >Update</Button>
        },
        {
            field: "Delete",
            headerName: "Delete",
            flex: 0.15,
            renderCell: (item) => <Button onClick={() => deleteProduct(item.row)} variant="contained" color="error" >Delete</Button>
        },
        {
            field: "Add to Favorites",
            headerName: "Add to Favorites",
            flex: 0.1,
            renderCell: (item) => <IconButton onClick={() => favOperation(item.row)}>
                {
                    isFavorite(item.row.id) ?
                            <StarIcon />
                         :                        
                            <StarBorderIcon />
                        
                }
            </IconButton>
        }
    ]

    const isFavorite = (id) =>{
        let favItem = favorites.find(f => f.id == id)
        if(favItem)
            return true
        else
            return false
    }

    return <>
        <Stack direction="row" justifyContent="flex-end">
            <Button onClick={() => navigate("/products/add")} sx={{ width: 150 }} variant='contained' >Add New</Button>
        </Stack>
        <hr />
        <div style={{ height: 400 }}>
            {
                loading == true ? <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress />
                </Box> : <DataGrid
                    rows={products}
                    columns={columns}
                    slots={{ toolbar: GridToolbar }}
                />
            }

        </div>
    </>
}

export default List