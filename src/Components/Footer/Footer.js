import React from 'react'
import './Footer.css'
import arrowright from '../../Assets/Images/Arrowright.png'
export default function Footer() {
  return (
    <>
    <div className="footer-wrapper">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4 col-6 d-flex  footer-box1">
                    <ul>
                        <li className='footer-link'>Home</li>
                        <li className='footer-link'>About</li>
                        <li className='footer-link'>Services</li>
                        <li className='footer-link'>Contact Us</li>
                    </ul>
                </div>
                <div className="col-lg-4 col-12 d-flex justify-content-end footer-box2">
                    <ul>
                        <li className='footer-link'>Address</li>
                        <p className='footer-add'>Dubai Silicon Oasis, Techno Hub 1, 60th street, Unit 16, Block C, Dubai,<br /> United Arab Emirates.</p>
                        <li className='footer-link'>On Map</li>
                    </ul>
                </div>
                <div className="col-lg-4 col-6 d-flex justify-content-lg-end footer-box3">
                    <ul>
                        <li className='footer-link'>Contact</li>
                        <p>+971 42285285</p>
                        <li className='footer-link'>Email ID</li>
                        <p>sales@red-stream.com</p>
                    </ul>
                </div>

                
            </div>
        </div>
    </div>
    <div className="footer-bottom-wrapper">
        <h1 className='fb-enq'>Enquire Now <img src={arrowright} alt=""  className='fb-arrowright'/></h1>
       <span className='fb-cr'>@ 2022. Red Stream FZCO</span><span className='fb-db'>Developed by DotSyndicate</span>
    </div>

    </>
  )
}
