import React from 'react'
import Navibar from './navibar/Navibar';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import TokenStore from '../contexts/TokenStore';
function RootLayout() {
  return (
    <div>
      <Navibar />
      <div>
        <TokenStore>
          <Outlet />
        </TokenStore>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default RootLayout