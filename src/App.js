import React from 'react'
import { Link, Routes,Route } from 'react-router-dom'
import AddSupplierMUI from './muiSample/AddSupplierMUI'
import SuppliersDataGrid from './muiSample/SuppliersDataGrid'
import AddCustomer from './muiSample/AddCustomer'
import DashboardLayout from './layout/DashboardLayout'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import List from './pages/product/List'
import Add from './pages/product/Add'


function App() {
  return <>
  <DashboardLayout>
    <Routes>
      <Route path='/products' element={<List/>}/>
      <Route path='/products/add' element={<Add/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </DashboardLayout>
  </>
}

export default App
