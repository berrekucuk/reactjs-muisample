import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { baseService } from '../../api/baseService'
import { Button, Stack, TextField } from '@mui/material'
import { useSnackbar } from 'notistack'

function Update() {

  const [name, setname] = useState("")
  const [unitPrice, setunitPrice] = useState("")
  const [unitsInStock, setunitsInStock] = useState(0)
  const [quantityPerUnit, setquantityPerUnit] = useState("")

  const { id } = useParams()

  const navigate = useNavigate()

  const {enqueueSnackbar} = useSnackbar()

  useEffect(() => {

    baseService.getById("products", id)
      .then(data => {
        setname(data.name)
        setunitPrice(data.unitPrice)
        setunitsInStock(data.unitsInStock)
        setquantityPerUnit(data.quantityPerUnit)
      })
  }, [])

  const update = () => {
    
    baseService.update("products/" + id,{
      id,
      name,
      unitPrice,
      unitsInStock,
      quantityPerUnit
    })
    .then(res => {
      enqueueSnackbar("Updated!!", {
        variant:"info" //Gelen uyarının rengini bu şekilde ayarlayabiliriz.
    })
      navigate("/products")
    })
  }


  return <>
    <h1>Update Product Form</h1>
    <hr />
    <Stack spacing={4}>
      <Stack direction="row" spacing={4}>
        <TextField fullWidth value={name} label="Name" onChange={(e) => setname(e.target.value)} />
        <TextField fullWidth value={unitPrice} label="Unit Price" onChange={(e) => setunitPrice(e.target.value)} />
      </Stack>
      <Stack direction="row" spacing={4}>
        <TextField fullWidth value={unitsInStock} label="Unit In Stock" onChange={(e) => setunitsInStock(e.target.value)} />
        <TextField fullWidth value={quantityPerUnit} label="Quantity Per Unit" onChange={(e) => setquantityPerUnit(e.target.value)} />
      </Stack>
      <Stack>
        <Button onClick={update} sx={{ width: "25%" }} variant="contained">Update</Button>
      </Stack>
    </Stack>
  </>
}

export default Update