import { AppBar, Stack } from '@mui/material'
import { Typography } from '@mui/material'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FavoritesContext } from '../context/FavoritesContext'

function Navbar() {

    const {favorites} = useContext(FavoritesContext)
 
  return <>
    <AppBar position="static">
      <Stack direction="row" justifyContent="space-evenly" sx={{ padding: "1%" }}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/products"><Typography variant="h5">Products</Typography></Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/favorites"><Typography variant="h5">Favorites <span style={{color:"red"}}>({favorites.length})</span></Typography></Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/customers"><Typography variant="h5">Customers</Typography></Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/todos"><Typography variant="h5">Todos</Typography></Link>
        

        
      </Stack>
    </AppBar>
  </>
}

export default Navbar