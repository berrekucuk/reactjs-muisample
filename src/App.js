import React from 'react'
import { Link, Routes,Route } from 'react-router-dom'
import AddSupplierMUI from './muiSample/AddSupplierMUI'
import SuppliersDataGrid from './muiSample/SuppliersDataGrid'


function App() {
  return <>
  <ul style={{display:'flex', justifyContent:'space-evenly'}}>
    <Link to="/suppliers">Supplier</Link>
    <Link to="/add-supplier"> Add Supplier</Link>

  </ul>
   <Routes>
      <Route path='/add-supplier' element={<AddSupplierMUI/>}/> 
      <Route path='/suppliers' element={<SuppliersDataGrid/>}/> 
   </Routes>
  </>
}

export default App
