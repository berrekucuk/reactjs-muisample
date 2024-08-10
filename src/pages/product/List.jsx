import React, { useEffect, useState } from 'react'
import { axiosIntance } from '../../api/axiosInstance'
import { DataGrid } from '@mui/x-data-grid'
import { CircularProgress,Box } from '@mui/material'
import { baseService } from '../../api/baseService'

function List() {

    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {

        baseService.getAll("products")
            .then(data => {
                setproducts(data)
                setloading(false)
            })
    }, [])

    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.2
        },
        {
            field: "name",
            headerName: "Name",
            flex: 0.2
        },
        {
            field: "unitPrice",
            headerName: "Unit Price",
            flex: 0.2
        },
        {
            field: "unitsInStock",
            headerName: "Stock",
            flex: 0.2
        },
        {
            field: "quantityPerUnit",
            headerName: "Quantity Per Unit",
            flex: 0.2
        }
    ]
    return <>
        <div style={{height:400}}>
            {
                loading == true ? <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',height:'100vh'}}>
                    <CircularProgress/>
                </Box> : <DataGrid
                rows={products}
                columns={columns}
            />
            }
            
        </div>
    </>
}

export default List