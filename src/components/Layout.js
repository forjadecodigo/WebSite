import React from 'react'
import Header from './header'
import Footer3 from './footer3'

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="layout-main">
        {children}
      </main>
      <Footer3 />
    </div>
  )
}

export default Layout 