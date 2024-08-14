import { Stack } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function CategoryDetail() {
  
  const {id} = useParams()

  const navigate = useNavigate()

  const [category, setcategory] = useState({})

  useEffect(() =>{
    axios.get(`https://northwind.vercel.app/api/categories/${id}`)
    .then(res => setcategory(res.data))
  },[])

  const goBack = () =>{
    navigate("/category")
  }
  
  return <>
  <h1>Detail Page</h1>
  <hr/>
  <Stack direction="column" spacing={2}>
    <Stack direction={"column"} justifyContent={"center"} spacing={2}>
      <h2>Id : {category.id}</h2>
      <h2>Name : {category.name}</h2>
      <h2>Description : {category.description}</h2>
    </Stack>
  </Stack>
  </>
}

export default CategoryDetail