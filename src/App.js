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
import Update from './pages/product/Update'
import CategoryList from './pages/category/CategoryList'
import CategoryAdd from './pages/category/CategoryAdd'
import CategoryDetail from './pages/category/CategoryDetail'
import CategoryUpdate from './pages/category/CategoryUpdate'


function App() {
  return <>
  <DashboardLayout>
    <Routes>

      {/* Product */}
      {/* <Route path='/products' element={<List/>}/>
      <Route path='/products/add' element={<Add/>}/>
      <Route path='/products/update/:id' element={<Update/>}/> */}

      {/* Category */}
      <Route path='/category' element={<CategoryList/>}/>
      <Route path='/category/add' element={<CategoryAdd/>}/>
      <Route path='/category/detail/:id' element={<CategoryDetail/>}/>
      <Route path='/category/update/:id' element={<CategoryUpdate/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </DashboardLayout>
  </>
}

export default App
