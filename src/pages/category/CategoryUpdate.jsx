import { Button, Stack, TextField } from '@mui/material'
import axios from 'axios'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function CategoryUpdate() {
  
  const [name, setname] = useState("")
  const [description, setdescription] = useState("")

  const {id} = useParams()

  const navigate = useNavigate()

  const {enqueueSnackbar} = useSnackbar()

  useEffect(() =>{
    axios.get(`https://northwind.vercel.app/api/categories/${id}`)
    .then(res => {
      setname(res.data.name)
      setdescription(res.data.description)
    })
  },[])

  const update= () =>{
    axios.put("https://northwind.vercel.app/api/categories/" + id,{
      name,
      description
    })
    .then(res =>{
      enqueueSnackbar("Updated!!",{
        variant:"info"
      })
      navigate("/category")
    })
  }
  
  
  return <>
  <h1>Update Category Form</h1>
  <hr/>
  <Stack spacing={4}>
    <Stack direction="row" spacing={4}>
        <TextField fullWidth value={name} label="Name" onChange={(e) => setname(e.target.value)}/>
    </Stack>
    <Stack direction="row" spacing={4}>
        <TextField fullWidth value={description} label="Description" onChange={(e) => setdescription(e.target.value)}/>
    </Stack>
    <Stack>
        <Button onClick={update} sx={{width:"25%"}} variant="contained">Update</Button>
    </Stack>
  </Stack>
  
  </>
}

export default CategoryUpdate