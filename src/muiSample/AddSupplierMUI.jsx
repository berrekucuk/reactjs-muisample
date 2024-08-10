import { Stack, Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function AddSupplierMUI() {

    const [companyName, setcompanyName] = useState("")
    const [contactName, setcontactName] = useState("")
    const [contactTitle, setcontactTitle] = useState("")
    
    const navigate = useNavigate()

    const add = () => {
        axios.post("https://northwind.vercel.app/api/suppliers", {
            companyName,
            contactName,
            contactTitle
        })
            .then(res => { 
                navigate("/suppliers")
                alert("Success!") 
            })
    }

    return <>
        <Stack spacing={2}>
            <Stack direction="row" justifyContent={"space-between"} spacing={4}>
                <TextField fullWidth id='companyName' label="Company Name" variant='outlined' onChange={(e) => setcompanyName(e.target.value)} />
            </Stack>
            <Stack direction="row" justifyContent={"space-between"} spacing={4}>
                <TextField fullWidth id='contactName' label="Contact Name" variant='outlined' onChange={(e) => setcontactName(e.target.value)} />
            </Stack>
            <Stack direction="row" justifyContent={"space-between"} spacing={4}>
                <TextField fullWidth id='contactTitle' label="Contact Title" variant='outlined' onChange={(e) => setcontactTitle(e.target.value)} />
            </Stack>
            <Stack direction={"row"}>
            <Button size="large" variant="contained" onClick={add}>Add</Button>
        </Stack>
        </Stack>
    </>
}

export default AddSupplierMUI