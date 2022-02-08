import Footer from '@components/Footer/Footer'
import Navbar from '@components/Navbar/Navbar'
import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout