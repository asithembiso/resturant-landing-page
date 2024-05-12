import React from "react"
import Navbar from "./Navbar"
import BannerBackground from "../assets/home-banner-background.png"
import BannerImage from "../assets/home-banner-image.png"
import { FiArrowRight } from "react-icons/fi"


function Home() {
  return (
    <div className="home-container">
        <Navbar/>
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt=""/>  
          </div>
          <div className="home-text-section">
            <h1 className="primary-headingg">
              Your Favourite Food Delivered Hot & Fresh
            </h1>
            <p>Our chefs do all the prep work, like peeling, 
              chopping & marinating, so you can have a freh meal
            </p>
            <button className="secondary-button">
              Order Now <FiArrowRight />
            </button>
          </div>

          <div className="home-image-container">
            <img src= {BannerImage} alt=""/>
          </div>

        </div>
    </div>
  )
}

export default Home