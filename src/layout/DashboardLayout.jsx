import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function DashboardLayout({ children }) {

    //Sarmallama özelliği varsa bir komponentin çocuklarını istediğimiz yere koyabiliriz.

    return <>

        <Navbar />
        <div style={{ padding: '3%' }}>
            {children}
        </div>
        <Footer />

    </>
}

export default DashboardLayout