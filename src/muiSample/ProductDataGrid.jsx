import {trTR} from '@mui/x-data-grid/locales'
import { DataGrid, GridToolbar} from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductsDataGrid() {

    const [products, setproducts] = useState([])

    useEffect(() =>{
        axios.get("https://northwind.vercel.app/api/products")
        .then(res => {
            console.log(res.data)
            setproducts(res.data)
        })
    },[])

    const columns = [
        {
            field: "id",
            headerName : "ID",
            flex: 0.1
        },
        {
            field: "name",
            headerName :"Ürün Adı",
            flex : 0.3
        },
        {
            field: "unitPrice",
            headerName : "Fiyat",
            flex: 0.3
        },
        {
            field: "unitsInStock",
            headerName : "Stok",
            flex: 0.3
        }
        
    ]

  return <>
  <div style={{height: 500}}>
    <DataGrid 
        rows = {products}
        columns = {columns}
        slots={{toolbar: GridToolbar}}
        slotProps={{
            toolbar: {
                showQuickFilter: true,
            },
        }}
        localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
        
    />       
    
  </div>
  </>
}

export default ProductsDataGrid