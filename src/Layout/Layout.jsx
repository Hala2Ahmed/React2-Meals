import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import style from "./Layout.module.scss";


export default function Layout() {
  return (
    <>
    <div className={style.layout}>
    <Navbar />
    <Outlet />
    </div>
    <Footer />
    </>
  )
}
