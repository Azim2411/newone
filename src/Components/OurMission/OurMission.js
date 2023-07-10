import React from "react";
import "./OurMission.css";
import ourmission from "../../Assets/Images/ourmisson.png";
import OurPromise from "../../Assets/Images/ourpromise.png";
import om3row from "../../Assets/Images/om3row.png";
export default function OurMission() {
  return (
    <div className="our-mission-wrapper">
      <div className="container-fluid">
        <div className="row p-0">

          <div className="col-lg-6 p-0 d-flex">
            <img src={ourmission} alt=""  className="om-img"/>
          </div>
          <div className="col-lg-6 px-3">
            <h1 className="om-heading">Our Mission</h1>
            <p className="common-content om-content">
              Our mission is to be a one stop solution for all your industrial
              and mining equipment, installation, commissioning, servicing,
              repair and maintenance, supply of spare parts, as well as
              technical and specialised training in mining and industrial{" "}
              <br className="d-lg-block d-none" />
              operations. <br className="d-lg-block d-none" />
              We endeavor to support our customers not only with the supply of
              genuine and reliable equipment but also with world class customer
              service and after sales support. As a result, we have the fastest
              growing global footprint of strategic partners to ensure that we
              bring our promise to your doorstep.
            </p>
          </div>
        </div>

        <div className="row p-0 flex-row-reverse">
            
          <div className="col-lg-6 p-0 d-flex justify-content-end">
            <img src={OurPromise} alt="" className="op-img"/>
          </div>
          <div className="col-lg-6 px-3">
            <h1 className="op-heading">Our Promise</h1>
            <p className="common-content op-content">
              Our mission is to be a one stop solution for all your industrial
              and mining equipment, installation, commissioning, servicing,
              repair and maintenance, supply of spare parts, as well as
              technical and specialised training in mining and industrial{" "}
              <br className="d-lg-block d-none" />
              operations. <br className="d-lg-block d-none" />
              We endeavor to support our customers not only with the supply of
              genuine and reliable equipment but also with world class customer
              service and after sales support. As a result, we have the fastest
              growing global footprint of strategic partners to ensure that we
              bring our promise to your doorstep.
            </p>
          </div>
        </div>

        <div className="row p-0">

          <div className="col-lg-6 p-0">
            <img src={om3row} alt=""  className="om-img2"/>
          </div>
          
        </div>
      </div>
    </div>
  );
}
