import { Description } from '@mui/icons-material'
import { TextField,Button, Stack } from '@mui/material'
import axios from 'axios'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CategoryAdd() {

    const [name, setname] = useState("")
    const [description, setdescription] = useState("")

    const navigate = useNavigate()

    const {enqueueSnackbar} = useSnackbar()

    const add = () =>{
        axios.post("https://northwind.vercel.app/api/categories",{
            name,
            description
        })
        .then(res => {
            enqueueSnackbar("Success!!",{
                variant: "success"
            })
            navigate("/category")
        })
    }
  return <>
  <h1>Add Category Form</h1>
  <hr/>
  <Stack spacing={4}>
    <Stack direction="row" spacing={4}>
        <TextField fullWidth value={name} label="Name" onChange={(e) => setname(e.target.value)}/>
    </Stack>
    <Stack direction="row" spacing={4}>
        <TextField fullWidth value={description} label="Description" onChange={(e) => setdescription(e.target.value)}/>
    </Stack>
    <Stack>
        <Button onClick={add} sx={{width:"25%"}} variant="contained">Add</Button>
    </Stack>
  </Stack>
  </>
}

export default CategoryAdd