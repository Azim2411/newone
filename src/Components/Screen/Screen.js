import React, { useRef } from 'react'
import "./Screen.css"
export default function Screen() {
    const screenRef=useRef()
  return (
    <div className="screen-wrapper d-flex align-items-center d-lg-block d-none" id='screen'>
      <div className="screen-content">
        <h1 className='screen-number'>01</h1>
        <p className='screen-content'>We are also the leading provider of consultancy with key strength in technical training and specialized support services to industrial and mining sectors across the world.</p>
      </div>
    </div>
  )
}
