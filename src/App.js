import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
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
import CustomerList from './pages/customer/CustomerList'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Favorites from './pages/Favorites'
import CustomerAdd from './pages/customer/CustomerAdd'
import Todos from './pages/todos/Todos'

function App() {
  return <>

    <DashboardLayout>
      <Routes>

        {/* Product */}
        <Route path='/products' element={<List />} />
        <Route path='/products/add' element={<Add />} />
        <Route path='/products/update/:id' element={<Update />} />

        {/* Category */}
        <Route path='/category' element={<CategoryList />} />
        <Route path='/category/add' element={<CategoryAdd />} />
        <Route path='/category/detail/:id' element={<CategoryDetail />} />
        <Route path='/category/update/:id' element={<CategoryUpdate />} />

        {/* Customer */}
        <Route path='/customers' element={<CustomerList />} />
        <Route path='/customers/add' element={<CustomerAdd />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/favorites' element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DashboardLayout>

  </>
}

export default App
