import React, { useState } from "react";
import "./Ps.css";
export default function Ps() {
    const [data,setData]=useState([
        {
            
            title:`Heavy Earth Moving Equipments & Spare Parts`,
            
        },
        {
           
            title:`Lifting Equipments & Spare Parts`,
            
        },
        {
           
            title:`Ground Engaging tools & Spare Parts`,
            
        },
        {
           
            title:`Bulk Materials Moving Solutions`,
            
        },
        {
           
            title:`Technical
            Consultancy Services`,
            
        },
        {
           
            title:`Installation New & 
            Repaired Equipments`,
            
        },
        {
           
            title:`Diagnostics & 
            Maintenance Tools`,
            
        },
        {
           
            title:`Training, & Certification`,
            
        },
        {
           
            title:`Engine Installation & Maintenance`,
            
        },
        {
           
            title:`Automation Components & Systems`,
            
        },
        {
           
            title:`Welding Equipment & Consumables`,
            
        },
        
    ])
    const [activeCard,setActiveCard]=useState(0)
  return (
    <div className="ps-wrapper" id="productandservices">
      <div className="d-flex align-items-center justify-content-between">
        <h1 className="ps-main-heading p-font">
          PRODUCTS
          <br />
          AND SERVICES
        </h1>
        <button className="common-btn text-dark">Enquire Now</button>
      </div>
        <div  className="ps-devider"></div>

        <div className="container-fluid">
            <div className="row">

                <div className="col-lg-6">
                    <div className="red-white-bg ps-enq-card d-flex flex-column align-items-start justify-content-between">
                        <p>Our advisors will help you choose the best possible list of <br />services for you</p>
                        <button className="common-btn text-dark">Enquire Now</button>
                    </div>
                </div>

                {data.map((data,i)=>{
                    return <div className="col-lg-3 pointer my-2" onClick={()=>setActiveCard(i)}>
                        <div className={activeCard==i?"ps-sm-card active":"ps-sm-card "}>
                            <h5 className="ps-sm-card-numbeer p-font">{i < 9 && 0}{+i+1}</h5>
                            <h5 className="ps-sm-card-title p-font">{data.title}</h5>
                            {activeCard==i && <button className={activeCard==i?"common-btn active d-lg-block d-none":"common-btn d-lg-block d-none"}>Know More</button>}
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
  );
}
