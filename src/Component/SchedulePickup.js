import React, { useState, useEffect } from "react";
import "../schedulepickup.css"
import { FaHouseUser, FaArrowRight,FaCircleNotch, FaCheckCircle } from 'react-icons/fa';
import image1 from "../Component/images/truck_img.png"
import image11 from "../Component/images/google_icon.png"
import { Link } from 'react-router-dom';
//api

import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import Footer from "./Footer";
import Navbar from "./Navbar";
const libraries = ['places'];

// const center = {
//   lat: latitude,  // default latitude
//   lng: longitude, // default longitude
// };

const SchedulePickup = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [selectedOptionCategory, setSelectedOptionCategory] = useState("");
    const [selectedOptionServices, setSelectedOptionServices] = useState("");
    const [selectedOptionTiming, setSelectedOptionTiming] = useState("");
    // long ang lat
    const [userLocation, setUserLocation] = useState(null);
    const [showMap, setShowMap] = useState(false);
  // const center = { lat: 0, lng: 0 }; // Set your initial center coordinates
  

  const handleButtonClick = () => {
    setShowMap(!showMap); // Toggle the map visibility
  };
// api used loc
  //    const { isLoaded, loadError } = useLoadScript({
  // googleMapsApiKey: 'AIzaSyDfMFq8mNzIcYlZRbHlwbTQXJetenNGb_o',
  // libraries,
  //   });

  //   if (loadError) {
  // return <div>Error loading maps</div>;
  //   }

  //   if (!isLoaded) {
  // return <div>Loading maps</div>;
  //   }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDfMFq8mNzIcYlZRbHlwbTQXJetenNGb_o',
    libraries,
  });

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []); // Fetch user location on component mount

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }
  const center = userLocation ? { lat: userLocation.latitude, lng: userLocation.longitude } : { lat: 37.7749, lng: -122.4194 };
    const handleSelectChangeCategory = (event) => {
      setSelectedOptionCategory(event.target.value);
    };
  
  
    const handleSelectChangeServices = (event) => {
      setSelectedOptionServices(event.target.value);
    };
  
  
    const handleSelectChangeTiming = (event) => {
      setSelectedOptionTiming(event.target.value);
    };
    
    // lat and lang

    // const getUserLocation = () => {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(
    //       (position) => {
    //         const { latitude, longitude } = position.coords;
    //         setUserLocation({ latitude, longitude });
    //       },
    //       (error) => {
    //         console.error('Error getting user location:', error);
    //       }
    //     );
    //   } else {
    //     console.error('Geolocation is not supported by this browser.');
    //   }
    // };
//


    return (
      <>
      <Navbar/>
      <section className="container-fluid py-5 ">
      <div className="PickUpForm">
        <div className="backgroundimg"></div>
        <div className="content">
          <div className="toplogo">
            <h2>Schedule A Pick Up</h2>
            <img src={image1} alt="" />
          </div>
          {/* lstitude and longitude */}
     {/* <div>
      <h1>Geolocation App</h1>
      <button onClick={getUserLocation}>Get User Location</button>  
      {userLocation && (
        <div>
          <h2>User Location</h2>
          <p>Latitude: {userLocation.latitude}</p>
          <p>Longitude: {userLocation.longitude}</p>
        </div>
      )}
    </div> */}
   
          <div className="NameInput">
            <p style={{marginBottom: "0px"}}>Name</p>
            <div className="grid-container-pickup">
              <div>
                <input  type="text" placeholder="First Name" />
              </div>
              <div>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
          </div>
  
          <div className="grid-container-pickup">
            <div>
              <p style={{marginBottom: "0px"}}>Email</p>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <p style={{marginBottom: "0px"}}>Phone</p>
              <input type="number" placeholder="+91" />
            </div>
          </div>
  
          <div className="grid-container-pickup">
            <div>
              <p style={{marginBottom: "0px"}}>Category</p>
              <select
                id="input1"
                onChange={handleSelectChangeCategory}
                value={selectedOptionCategory}
              >
                <option value="" disabled hidden>
                  Category
                </option>
                <option value="option1">Normal Washing</option>
                <option value="option2">Premium Washing</option>
                <option value="option3">Dry Cleaning</option>
                <option value="option3">Ironing</option>
                <option value="option3">Shoes Washing</option>
                <option value="option3">Blanket</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <p style={{marginBottom: "0px"}}>Services</p>
              <select
                id="input1"
                onChange={handleSelectChangeServices}
                value={selectedOptionServices}
              >
                <option value="" disabled hidden>
                  Services
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option3">Option 3</option>
                <option value="option3">Option 3</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
  
          <div className="items_input">
            <p style={{marginBottom: "0px"}}>Items</p>
            <input
              type="text"
              placeholder="Items"
              
            />
          </div>
          <div className="grid-container-pickup">
            <div className="date-input-container">
              <input type="date" placeholder="Date"  />
            </div>
            <div>
              <select
                id="input1"
                onChange={handleSelectChangeTiming}
                value={selectedOptionTiming}
              >
                <option id='input2'value="" disabled hidden>
                  Timing
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option3">Option 3</option>
                <option value="option3">Option 3</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <div>
            <p style={{marginBottom: "0px"}}>Address</p>
            <div className="grid-container-pickup">
              <div>
                <input type="text" placeholder="Street Address" />
              </div>
              <div>
                <input type="text" placeholder="Area" />
              </div>
            </div>
            <div className="grid-container-pickup" style={{ marginTop: "10px" }}>
              <div>
                <input type="text" placeholder="City" />
              </div>
              <div>
                <input type="number" placeholder="Zip Code" />
              </div>
            </div>
          </div>
         
     
          <div>
 

    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="pickup-input-wrapper">
        <input type="text" placeholder="Google location" style={{ marginBottom: '10px' }} />
        <button type="button" className="pickup-eye-button" onClick={handleButtonClick}>
          <img className="mb-3" src={image11} style={{ height: '20px', width: '20px' }} alt="Toggle Map" />
        </button>
      </div>
      {showMap && (
        <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '300px' }}
            zoom={10}
            center={center}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
      )}
    </div>



          </div>
          <div>
            {/* <p style={{marginBottom: "0px"}}>Special Instruction</p> */}
            <input type="text" placeholder="Special Instruction" />
          </div>
  
          <div className="Submit_button">
            <button type="" data-toggle="modal"
    data-target="#exampleModalCenter">Submit</button>
          </div>

{/* popup */}
<div className="modal w-100 fade container-fluid" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header no-underline text-center">
        <div style={{ display: 'block', margin: 'auto' }}>
          <h1 style={{ color: 'green', marginBottom: '10px' }}>
            <FaCheckCircle />
          </h1>
        </div>
      </div>
      <div>
        <h2 className="modal-title font-weight-cold text-center mx-auto" id="exampleModalLongTitle">
          Your order is successfully placed!
        </h2>
      </div>

      <div className="modal-body text-center no-underline">
        <p className="text-dark">
          Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.
        </p>
      </div>

      <div className="modal-footer text-center no-underline justify-content-center">
        <Link to='/pickup' className="d-inline-block mx-2">
          <button className="btn btn-hom1 font-weight-bold"><FaHouseUser className="mx-3"/> Home</button>
        </Link>
        <Link to='/pickup' className="d-inline-block mx-2">
          <button className="btn btn-order1 font-weight-bold">View Order <FaArrowRight className="mx-3"/> </button>
        </Link>
      </div>
    </div>
  </div>
</div>













        </div>
      </div>
      </section>
    

      <Footer/>
      </>

    );
}

export default SchedulePickup