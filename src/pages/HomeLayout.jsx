import React, {useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import {Navbar, Footer} from "../components/index.js"

const HomeLayout = () => {


  return (<>
  <Navbar></Navbar>
    <Outlet/>
  <Footer></Footer>
  </>

  )
}

export default HomeLayout