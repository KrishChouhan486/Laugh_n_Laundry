import React from "react";
import "../caraousalserv.css";
import Item from "./Items";
import Carousal from "@itseasy21/react-elastic-carousel";
// import img1 from "./images/img1.jpeg";
// import img2 from "./images/img2.jpeg";
// import img3 from "./images/img3.jpeg";
// import img4 from "./images/img4.jpeg";
// import btn from "./images/right-arrow.png"

import img1 from "../Component/images/img1.png";
import img2 from "../Component/images/img2.png";
import img3 from "../Component/images/img3.png";
import img4 from "../Component/images/img4.png";

const Caraousalserv = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1400, itemsToShow: 4.15 },
  ];
  return (
    <div className="BottomServCaraousal">
      <div className="ourserviceheading">
        <h1>Our Services</h1>
      </div>

      <div className="ourserviceparagraph">
        <p>
          EXPERIENCE SAVINGS, PICKUP AND DELIVERY OPTIONS RECEIVE
          ROUND-THE-CLOCK SUPPORT
        </p>
      </div>

      <Carousal
        breakPoints={breakPoints}
        isRTL={false}
        showArrows={false}
        pagination={false}
      >
        <Item>
          <div className="item">
            <img src={img1} alt="ueis" />

            <div id="cont">
              <p>Wash</p>
            </div>
          </div>
        </Item>
        <Item>
          <div className="item">
            <img src={img2} alt="ueis" />

            <div id="cont">
              <p>Premium Wash</p>
            </div>
          </div>
        </Item>
        <Item>
          <div className="item">
            <img src={img3} alt="ueis" />

            <div id="cont">
              <p>Iron</p>
            </div>
          </div>
        </Item>

        <Item>
          <div className="item">
            <img src={img4} alt="ueis" />

            <div id="cont">
              <p>Dry Cleaning</p>
            </div>
          </div>
        </Item>

        <Item>
          <div className="item">
            <img src={img3} alt="ueis" />

            <div id="cont">
              <p>Iron</p>
            </div>
          </div>
        </Item>
        {/* <Item>
        <div className="item">
          <img src={img4} alt="ueis"  />
          
        </div>
       </Item>
       <Item>
        <div className="item">
          <img src={img1} alt="ueis"  />
          
        </div>
       </Item>
       <Item>
        <div className="item">
          <img src={img2} alt="ueis"  />
          
        </div> */}
        {/* </Item> */}
      </Carousal>
    </div>
  );
};

export default Caraousalserv;
