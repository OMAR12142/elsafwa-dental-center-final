import React from 'react'
import Navbar from '../componants/Navbar'
import Footer from '../componants/Footer'
import { Outlet } from 'react-router'
import ScrollToTop from '../componants/ScrollToTop'
import ScrollButtons from '../componants/ScrollButtons'

export default function Layout() {
  return (
<>
      <ScrollToTop />

<Navbar/>


<Outlet/>
<ScrollButtons/>

<Footer/>

</>


)
}
