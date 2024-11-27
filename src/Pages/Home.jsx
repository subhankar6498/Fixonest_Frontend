import React from "react";
import { Link } from "react-router-dom";
import AboutPart from "../Components/AboutPart";
import ServicePart from "../Components/ServicePart";
import TeamPart from "../Components/TeamPart";
import TestimonialPart from "../Components/TestimonialPart";

const Home = () => {
  return (
    <>
      {/* <!-- Hero Section Begin --> */}
      {/* <!-- Carousel Start --> */}
      <div class="container-fluid p-0">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            {/* {Array.isArray(bannerdata) &&
              bannerdata?.map((item, index) => ( */}
            <div
              //   key={index}
              //   className={`carousel-item ${index === 0 ? "active" : ""}`}
              className="carousel-item active"
              style={{ minHeight: "300px" }}
            >
              <img
                class="position-relative w-100"
                // src={`${ImageUrl}${item.image}`}
                src="/img/banner-bg1.jpg"
                style={{ miHeight: "300px", objectFit: "cover" }}
              />
              <div class="carousel-caption d-flex align-items-center justify-content-center">
                <div class="p-5" style={{ width: "100%", maxWidth: "900px" }}>
                  <h5 class="text-white text-uppercase mb-md-3">
                    {/* {item?.title} */}
                    24 x 7 Availability
                  </h5>
                  <h1 class="display-3 text-white mb-md-4">
                    {/* {item?.subtitle} */}
                    Need Help Right Away ?
                  </h1>
                  <Link
                    to="/contact"
                    
                  >
                    <button className="py-3 px-4 carousel_btn">
                    Contact Us
                    </button>
                    
                  </Link>
                </div>
              </div>
            </div>
            <div
              //   key={index}
              //   className={`carousel-item ${index === 0 ? "active" : ""}`}
              className="carousel-item"
              style={{ minHeight: "300px" }}
            >
              <img
                class="position-relative w-100"
                // src={`${ImageUrl}${item.image}`}
                src="/img/banner-bg2.jpg"
                style={{ miHeight: "300px", objectFit: "cover" }}
              />
              <div class="carousel-caption d-flex align-items-center justify-content-center">
                <div class="p-5" style={{ width: "100%", maxWidth: "900px" }}>
                  <h5 class="text-white text-uppercase mb-md-3">
                    {/* {item?.title} */}
                    Handyman Expertise
                  </h5>
                  <h1 class="display-3 text-white mb-md-4">
                    {/* {item?.subtitle} */}
                    Services at your doorstep
                  </h1>
                  <Link
                    to="/contact"
                    
                  >
                    
                    <button className="py-3 px-4 carousel_btn" style={{backgroundColor: "#a81d1d"}}>
                    Contact Us
                    </button>
                    
                  </Link>
                </div>
              </div>
            </div>
            <div
              //   key={index}
              //   className={`carousel-item ${index === 0 ? "active" : ""}`}
              className="carousel-item"
              style={{ minHeight: "300px" }}
            >
              <img
                class="position-relative w-100"
                // src={`${ImageUrl}${item.image}`}
                src="/img/banner-bg3.jpg"
                style={{ miHeight: "300px", objectFit: "cover" }}
              />
              <div class="carousel-caption d-flex align-items-center justify-content-center">
                <div class="p-5" style={{ width: "100%", maxWidth: "900px" }}>
                  <h5 class="text-white text-uppercase mb-md-3">
                    {/* {item?.title} */}
                    You can trust us
                  </h5>
                  <h1 class="display-3 text-white mb-md-4">
                    {/* {item?.subtitle} */}
                    We can do anythings
                  </h1>
                  <Link
                    to="/contact"
                    
                  >
                    <button className="py-3 px-4 carousel_btn" style={{backgroundColor: "#a81d1d"}}>
                    Contact Us
                    </button>
                    
                  </Link>
                </div>
              </div>
            </div>
            {/* ))} */}
          </div>

          <a
            href="#carouselExampleCaptions"
            class="carousel-control-prev"
            type="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            {/* <span class="visually-hidden">Previous</span> */}
          </a>
          <a
            href="#carouselExampleCaptions"
            class="carousel-control-next"
            type="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            {/* <span class="visually-hidden">Next</span> */}
          </a>
        </div>
      </div>
      {/* <!-- Carousel End --> */}
      {/* <!-- Hero Section End --> */}


      {/* <!-- About part start --> */}
                <AboutPart/>


      {/* <!-- Service part start --> */}
                <ServicePart/>

      {/* <!-- Team part start --> */}
                <TeamPart/>

      {/* <!-- Testimonial part start --> */}
                <TestimonialPart/>


    </>
  );
};

export default Home;
