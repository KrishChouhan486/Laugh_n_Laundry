import React from "react";
import "../Project.css";
import img1 from "../Component/images/smile.png";
import img2 from "../Component/images/Washing Maching.png";
import img3 from "../Component/images/step1.jpeg";
import img4 from "../Component/images/step2.jpeg";
import img5 from "../Component/images/step3.jpeg";
import img6 from "../Component/images/step4.jpeg";
import img7 from "../Component/images/section5.jpeg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Bubble from "./Bubble";
import Caraousal from "./Caraousal"
import Caraousalserv from "./Caraousalserv"
import CaraousalServBottom from "./Caraousalservbottom";

const Home = () => {
  return (
    <>
   
        {/* nav */}
        <Navbar/>
        <Bubble/>
        
        
        
        {/* section1 */}
        <section className="container-fluid my-section-1">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              {/* <img className="img-smile mt-4 " src="images/smile.png" alt="" /> */}
              <img className="img-smile mt-4" alt="" src={img1} />
              <h1 className="my-main-heading text-center mt-1">
                Every Spin <br /> Tells A story
              </h1>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                className="mt-4 py-5 mt-sm-5 img-washing-machine"
                alt=""
                src={img2}
              />
            </div>
          </div>
        </section>
        {/* section2 */}
        <Caraousal/>
        {/* section3 */}
        <section className="container-fluid py-5 my-section-3">
          <h3 style={{ color: "#D76D6D" }} className="text-center pt-3 ">
            HOW IT WORKS
          </h3>
          <h1 className="text-center mb-5 mt-3">Get it done in 4 steps</h1>
          <div className="row">
            <div className="col-lg-3 mt-sm-5 mt-md-5 col-md-4 col-sm-5">
              <div className="card my-card ">
                <div className="card-body ">
                  <h4 className="text-center text-uppercase my-step">Step 1</h4>
                  <h3 className="text-center my-sub-heading">Pick Up</h3>
                  {/* <img className="img-step-1" src="images/step1.jpeg" alt="" /> */}
                  <img className="img-step-1" alt="" src={img3} />
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-sm-5 mt-md-5 col-md-4 col-sm-5">
              <div className="card my-card  mb-sm-4 mb-md-4 ">
                <div className="card-body ">
                  <h4 className="text-center text-uppercase my-step">Step 2</h4>
                  <h3 className="text-center my-sub-heading">Wash &amp; Dry</h3>
                  <img className="img-step-1" alt="" src={img4} />
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-sm-5   mt-md-5 col-md-4 col-sm-5">
              <div className="card my-card  mb-sm-5 mb-md-5">
                <div className="card-body ">
                  <h4 className="text-center text-uppercase my-step">Step 3</h4>
                  <h3 className="text-center my-sub-heading">Fold</h3>
                  <img className="img-step-1" alt="" src={img5} />
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-sm-5 mt-md-5 col-md-4 col-sm-5">
              <div className="card my-card ">
                <div className="card-body ">
                  <h4 className="text-center text-uppercase my-step">Step 4</h4>
                  <h3 className="text-center my-sub-heading">Delivery</h3>
                  <img className="img-step-1" alt="" src={img6} />
                </div>
              </div>
            </div>
          </div>
        </section>


<Caraousalserv/>
<CaraousalServBottom/>




        {/* section5 */}
        <section className="container-fluid my-section-5">
   
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-6">
              {/* <img className="img-section5 mt-5" src="images/section5.jpeg" alt="" /> */}
              <img className="img-section5 mt-5" alt="" src={img7} />
              {/* <h1 class="my-main-heading ">Every Spin Tells A story</h1> */}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="mt-5 py-5 w-75 m-5">
                <h1 className="font-weight-bold">Lorem Ipsum</h1>
                <p className="text-uppercase my-para-section5 mt-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quaerat, adipisci recusandae nihil aspernatur asperiores
                  consectetur. Consequuntur quae tempore omnis et temporibus
                  fuga, quaerat obcaecati cumque explicabo alias facilis dolorum
                  harum aliquid culpa possimus, autem nam pariatur suscipit a?
                  Unde rem, doloremque inventore ratione quae optio iste sunt
                  dicta adipisci illo aperiam quibusdam hic tempore totam odio
                  sequi voluptatem exercitationem voluptas voluptate quia
                  delectus incidunt maxime. Doloribus est facere
                </p>
              </div>
            </div>
          </div>
        </section>
      
  {/* Footer */}
 <Footer/>
  {/* Footer */}

      </>
 
  );
};

export default Home;