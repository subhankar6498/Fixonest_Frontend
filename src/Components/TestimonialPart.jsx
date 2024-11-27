import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllTestimonials } from "../Api/Functions/Testimonial.api";
import PageLoader from "../Loader/PageLoader";
import { ImageUrl } from "../Api/AxiosInstance/ImageUrl";

const TestimonialPart = () => {
  const {
    isLoading,
    isError,
    data: testimonialdata,
    error,
  } = useQuery({
    queryKey: ["testimonial_data"],
    queryFn: getAllTestimonials,
  });
  if (isLoading) {
    return <PageLoader />;
  }
  if (isError) {
    return <h2>{error?.message}</h2>;
  }
  return (
    <>
      <div class="container-fluid py-5 aboutus">
        <div class="container py-5">
          <div className="about_heading">
            <h4>// Testimonials //</h4>
            <h3 className="about_whychooseus mb-5">
              See What Our Customers Said
            </h3>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div
                class="carousel slide testimonial-carousel owl-dot"
                id="imageCarousel"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  {testimonialdata?.map((item, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      {/* <div
                      className="carousel-item active"
                    > */}
                      <div class="text-center">
                        <i class="fa fa-3x fa-quote-left text-white mb-4"></i>
                        <h6 class="font-weight-normal mb-4 text-white">
                          {item?.talk.slice(0, 200)}
                        </h6>
                        <img
                          class="img-fluid mx-auto mb-3"
                          src={`${ImageUrl}${item?.testimonialImage}`}
                          alt=""
                          style={{
                            borderRadius: "50%",
                            height: "100px",
                            width: "100px",
                          }}
                        />
                        <h5 class="m-0 text-white">{item?.clientName}</h5>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  className="carousel-control-prev"
                  href="#imageCarousel"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    style={{ backgroundColor: "black" }}
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#imageCarousel"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    style={{ backgroundColor: "black" }}
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialPart;
