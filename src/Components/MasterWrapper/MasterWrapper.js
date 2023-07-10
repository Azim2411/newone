import React from 'react'
import './MasterWrapper.css'
import Ps from '../ProductAndServices/Ps'
import OurMission from '../OurMission/OurMission'
import AboutUs from '../AboutUs/AboutUs'
export default function MasterWrapper() {
  return (
    <div className='master-wrapper'>
        <Ps/>
        <OurMission/>
        <AboutUs/>
    </div>
  )
}
