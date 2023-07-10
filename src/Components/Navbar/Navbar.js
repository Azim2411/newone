import React, { useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../Assets/Images/logo.png'
import logophone from '../../Assets/Images/logo-phone.png'
import { useLocation } from 'react-router-dom'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

export default function Navbar() {
  const [mobilenavbar,setmobilenavbar]=useState(false)
  const location=useLocation()
  console.log(location.hash.slice(1))
  return (
    <div className="navbar-wrapper d-flex justify-content-between ">
      <div className="logo d-lg-block d-none">
        <img src={logo} alt="" />
      </div>
      <div className="logo-phone">
        <img src={logophone} alt="" />
      </div>
      <ul className={mobilenavbar?"mobile-navbar-translate mobile-navbar":"mobile-navbar d-lg-none"}>
      <BsFillArrowRightCircleFill className='text-white ms-2' size={20} onClick={()=>setmobilenavbar(false)}/>
        <li onClick={()=>setmobilenavbar(false)}><a className={(location.hash.slice(1))=="home" || (location.pathname+location.hash=="/") ?'mn-navitem active':'mn-navitem'} href="#home">Home</a></li>
        <li onClick={()=>setmobilenavbar(false)}><a className={(location.hash.slice(1))=="aboutus" ?'mn-navitem active':'mn-navitem'} href="#aboutus">About</a></li>
        <li onClick={()=>setmobilenavbar(false)}><a className='mn-navitem' href="#productandservices">Products</a></li>
        <li onClick={()=>setmobilenavbar(false)}><a className='mn-navitem' href="#productandservices">Services</a></li>
        <li onClick={()=>setmobilenavbar(false)}><a className='mn-navitem' href="">Contact Us</a></li>
      </ul> 
      <div className="d-flex align-items-center">
      <button className='common-btn d-lg-none d-block text-dark me-3'>Enquire Now</button>
      <div className="hamburger" onClick={()=>setmobilenavbar(true)}>
        <span className='line1'></span>
        <span className='line2'></span>
      </div>
      </div>
      
      <ul className="navitems  align-items-center  ">
        <li><a href="#home"  className={(location.hash.slice(1))=="home" || (location.pathname+location.hash=="/") ?'navitem active':'navitem'}>Home</a></li>

        <li ><a href="#aboutus"  className={(location.hash.slice(1))=="aboutus" ?'navitem active':'navitem'}>About</a></li>

        <li ><a href="#productandservices"  className={(location.hash.slice(1))=="productandservices" ?'navitem active':'navitem'}>Products</a></li>

        <li ><a href="#productandservices"  className={(location.hash.slice(1))=="services" ?'navitem active':'navitem'}>Services</a></li>

        <li ><a href="#aboutus"  className={(location.hash.slice(1))=="contactus" ?'navitem active':'navitem'}>Contact Us</a></li>
      <button className='common-btn nav-ctn-btn'>Contact Us</button>
      </ul>
    </div>
  )
}
