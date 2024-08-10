import { Button, Stack, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

function AddProductMUI() {

    const [name, setname] = useState("")
    const [unitPrice, setunitPrice] = useState("")
    const [unitsInStock, setunitsInStock] = useState("")
    const [quantityPerUnit, setquantityPerUnit] = useState("")

    const add = () =>{
        axios.post("https://northwind.vercel.app/api/products",{
            name,
            unitPrice,
            unitsInStock,
            quantityPerUnit
        })
        .then(res => { alert("Success!")})
    }


    // TextField => Kullanıcıların metin girmesi için bir alan sağlar.(input)
    // fullWidth => Kullanıcı arayüzlerinde elemanların genişliğinin ayarlanmasını sağlar.
  return <>
    <Stack spacing={2}>
        <Stack direction="row" justifyContent={"space-between"} spacing={4}>
            <TextField fullWidth id='name' label="Name" variant='outlined' onChange={(e) => setname(e.target.value)}/>
            <TextField fullWidth id='unitPrice' label="Unit Price" variant='outlined' onChange={(e) => setunitPrice(e.target.value)}/>
        </Stack>
        <Stack direction="row" justifyContent={"space-between"} spacing={4}>
            <TextField fullWidth id='stock' label="Stock" variant='outlined' onChange={(e) => unitsInStock(e.target.value)}/>
            <TextField fullWidth id='quantityPerUnit' label="Quantity Per Unit" variant='outlined' onChange={(e) => setquantityPerUnit(e.target.value)}/>
        </Stack>
        <Stack direction={"row"}>
            <Button size="large" variant="contained">Add</Button>
        </Stack>
    </Stack>
  </>
}

export default AddProductMUI