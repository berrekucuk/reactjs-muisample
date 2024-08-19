import React, { useState } from 'react'
import { axiosInstance } from '../../api/axiosInstance'
import { useNavigate } from 'react-router-dom'

function CustomerAdd() {

const [formData, setformData] = useState([])

const navigate = useNavigate()

const handleChange = (e) =>{
    setformData({
        ...formData,
        [e.target.name]:e.target.value
    })
}

const handleSubmit =(e) =>{
    e.preventDefault()
    axiosInstance.post("customers",formData)
    .then(res => {
        navigate("/customers")
    })   
}


  return <>
  <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor=''>Company Name</label>
        <input required type='text'  name='companyName' onChange={handleChange}/>
    </div>
    <div>
        <label htmlFor=''>Contact Name</label>
        <input required type='text'  name='contactName' onChange={handleChange}/>
    </div>
    <div>
        <label htmlFor=''>Contact Title</label>
        <input required type='text'  name='contactTitle' onChange={handleChange}/>
    </div>
    <div>
        <button type='submit'>Add</button>
    </div>
  </form>
  </>
}

export default CustomerAdd