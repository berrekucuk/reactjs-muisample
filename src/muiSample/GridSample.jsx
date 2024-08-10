import { Grid } from '@mui/material'
import React from 'react'

function GridSample() {
  return <>
  
  {/* Grid'leri kullanırken sayfayı ızgara gibi düşünebiliriz.
  Grid 12 adet ızgaradan oluşur.
  Bunları xs, sm, md gibi breakpointler kullanarak sayfa boyutuna göre ayarlama yapabiliriz.
  spacing ızgaralar arasında boşluk bırakmamızı sağlar. */}

  <Grid container spacing={2}>
    <Grid item xs={12} sm={6} md={3}>
        <div style={{height:100, borderStyle: 'solid'}}>
            BOX-1
        </div>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
        <div style={{height:100, borderStyle: 'solid'}}>
            BOX-2
        </div>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
        <div style={{height:100, borderStyle: 'solid'}}>
            BOX-3
        </div>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
        <div style={{height:100, borderStyle: 'solid'}}>
            BOX-4
        </div>
    </Grid>
  </Grid>
  </>
}

export default GridSample