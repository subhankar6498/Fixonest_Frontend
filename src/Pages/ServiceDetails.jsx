import React from "react";
import { Link, useParams } from "react-router-dom";
import SideBar from "../Components/SideBar";
import { useQuery } from "@tanstack/react-query";
import PageLoader from "../Loader/PageLoader";
import { ImageUrl } from "../Api/AxiosInstance/ImageUrl";
import { getServiceDetails } from "../Api/Functions/ServiceDetails.api";

const ServiceDetails = () => {
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: detaildata,
    error,
  } = useQuery({
    queryKey: ["service_details", id],
    queryFn: () => getServiceDetails(id),
  });
  if (isLoading) {
    return <PageLoader />;
  }
  if (isError) {
    return <h1>{error?.message}</h1>;
  }
  console.log("sss", detaildata);

  return (
    <>
      {/* <!-- Header Start --> */}
      <div class="container-fluid service-header">
        <div class="container">
          <div
            class="d-flex flex-column justify-content-center"
            style={{ minHeight: "300px" }}
          >
            <h3 class="display-4 text-white text-uppercase">Service Details</h3>
            <div class="d-inline-flex text-white">
              <p class="m-0 text-uppercase">
                <Link class="text-white" to="/">
                  Home
                </Link>
              </p>
              <i class="fa fa-angle-double-right pt-1 px-3"></i>
              <p class="m-0 text-uppercase">
                <Link class="text-white" to="/services">
                  Services
                </Link>
              </p>
              <i class="fa fa-angle-double-right pt-1 px-3"></i>
              <p class="m-0 text-uppercase">{detaildata?.title}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}

      {/* <!-- Categories Grid Section Begin --> */}
      <section class="categories-grid-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-6 col-sm-12 p-0">
              <div class="cg-item">
                <div class="cg-pic set-bg">
                  <img
                    src={`${ImageUrl}/${detaildata?.serviceImage}`}
                    alt="photo"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div class="cg-text">
                  <h5>
                    <a href="#">{detaildata?.title}</a>
                  </h5>

                  <p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: detaildata?.description,
                      }}
                    ></div>
                  </p>

                  <Link to={`/booking/${detaildata._id}`}>
                    <button className="mt-3 py-2 px-4 carousel_btn mx-auto">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 p-0">
              <SideBar />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Categories Grid Section End --> */}
    </>
  );
};

export default ServiceDetails;
