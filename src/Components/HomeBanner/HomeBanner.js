import React from 'react'
import './HomeBanner.css'
import hbdesign from '../../Assets/Images/hb-design.png'
import hbarrow from '../../Assets/Images/hb-arrow.png'
export default function HomeBanner() {
  return (
    <div className="hb-wrapper d-flex justify-content-start align-items-center" id="home">
      <img src={hbdesign} alt="" className='hb-design d-lg-block d-none'/>
      <div className="hb-content">
        <h1 className='hb-main-heading p-font'>RED <br /> STREAM <br /> FZCO</h1>
        <p className='hb-content common-content'>Leading provider of industrial, mining and heavy earthmoving equipment, as well as specialized training and technical mining support services.</p>
        <p className='hb-content common-content d-lg-none d-block'>We are also the leading provider of consultancy with key strength in technical training and specialized support services to industrial and mining sectors across the world.</p>
        <a href="#screen" className='d-lg-block d-none'><img src={hbarrow} alt="" /></a>
      </div>
    </div>
  )
}
