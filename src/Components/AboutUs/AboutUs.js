import React from 'react'
import './AboutUs.css'
export default function AboutUs() {
  return (
    <div className="aboutus-wrapper" id="aboutus">
        <h1 className='about-us-main-heading'>
            About Us
        </h1>
        <p className='common-content aboutus-content' style={{marginBottom:"60px"}}>Red Stream FZCO is a leading supplier of a wide range of industrial, mining and heavy earth moving equipment, their installation, commissioning, servicing, repair and maintenance, supply of spare parts, as well as specialised training and technical mining support services.</p>

        <h1 className='about-us-main-heading  about-bottom'>sales@red-stream.com</h1>
        <h1 className='about-us-main-heading red-color about-bottom'>+971 42285285</h1>
    </div>
  )
}
