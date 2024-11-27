import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import SideBar from "../Components/SideBar";
import { useQuery } from "@tanstack/react-query";
import PageLoader from "../Loader/PageLoader";
import { ImageUrl } from "../Api/AxiosInstance/ImageUrl";
import { getCatWiseServices } from "../Api/Functions/CategoryWiseService.api";

const CatvegoryWiseService = () => {
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: catwiseservicedata,
    error,
  } = useQuery({
    queryKey: ["category_wise_services", id],
    queryFn: () => getCatWiseServices(id),
  });
  if (isLoading) {
    return <PageLoader />;
  }
  if (isError) {
    return <h1>{error?.message}</h1>;
  }
  console.log("catwise", catwiseservicedata);

  return (
    <>
      {/* <!-- Header Start --> */}
      <div class="container-fluid service-header">
        <div class="container">
          <div
            class="d-flex flex-column justify-content-center"
            style={{ minHeight: "300px" }}
          >
            <h3 class="display-4 text-white text-uppercase">
              Category Wise Services
            </h3>
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
              <p class="m-0 text-uppercase">CategoryWiseService</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}

      {/* <!-- Categories Grid Section Begin --> */}
      <section class="categories-grid-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 p-0">
              <div class="row">
                {Array.isArray(catwiseservicedata) &&
                  catwiseservicedata?.map((item) => (
                    <div class="col-lg-6">
                      <div class="cg-item">
                        <div class="cg-pic set-bg">
                          <img
                            src={`${ImageUrl}/${item?.serviceImage}`}
                            alt="photo"
                            width="100%"
                            height="250px"
                          />
                        </div>
                        <div class="cg-text">
                          <h5>
                            <a href="#">{item?.categoryName}</a>
                          </h5>

                          <p>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item?.description.slice(0, 50),
                              }}
                            ></div>
                          </p>
                          <Link to={`/service/details/${item?._id}`}>
                            <button className="mt-3 py-2 px-4 carousel_btn">
                              Learn More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <Link to="/services">
                <button className="mt-3 py-2 px-4 viewall_btn">
                  <i class="fa fa-angle-double-left pt-1 px-2"></i>
                  View All Services
                </button>
              </Link>
            </div>
            <div class="col-lg-4 col-md-7 p-0">
              <SideBar />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Categories Grid Section End --> */}
    </>
  );
};

export default CatvegoryWiseService;
