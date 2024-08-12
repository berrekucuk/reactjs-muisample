import { Stack, TextField, Button} from '@mui/material'
import React, { useState } from 'react'
import { baseService } from '../../api/baseService'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

function Add() {

    const [name, setname] = useState("")
    const [unitPrice, setunitPrice] = useState("")
    const [unitsInStock, setunitsInStock] = useState(0)
    const [quantityPerUnit, setquantityPerUnit] = useState("")

    const navigate = useNavigate()

    const {enqueueSnackbar} = useSnackbar()

    const create = () =>{
        baseService.create("products",{
            name,
            unitPrice,
            unitsInStock,
            quantityPerUnit
        })
        .then(res =>{
            enqueueSnackbar("Success!!", {
                variant:"success" //Gelen uyarının rengini bu şekilde ayarlayabiliriz.
            })
            navigate("/products")
        })
    }

  return <>
  <h1>Add Product Form</h1>
  <hr/>
  <Stack spacing={4}>
    <Stack direction="row" spacing={4}>
        <TextField fullWidth value={name} label="Name" onChange={(e) => setname(e.target.value)}/>
        <TextField fullWidth value={unitPrice} label="Unit Price" onChange={(e) => setunitPrice(e.target.value)} />
    </Stack>
    <Stack direction="row" spacing={4}>
        <TextField fullWidth value={unitsInStock} label="Unit In Stock" onChange={(e) => setunitsInStock(e.target.value)}/>
        <TextField fullWidth value={quantityPerUnit} label="Quantity Per Unit" onChange={(e) => setquantityPerUnit(e.target.value)} />
    </Stack>
    <Stack>
        <Button onClick={create} sx={{width:"25%"}} variant="contained">ADD</Button>
    </Stack>
  </Stack>
  </>
}

export default Add