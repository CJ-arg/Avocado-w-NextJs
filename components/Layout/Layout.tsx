import Footer from '@components/Footer/Footer'
import Navbar from '@components/Navbar/Navbar'
import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <div className="container">
        <Footer />
      </div>
      <style jsx>
        {`
          .container {
            background-color: rgb(165, 135, 0);
          }
        `}
      </style>
    </div>
  )
}

export default Layout
