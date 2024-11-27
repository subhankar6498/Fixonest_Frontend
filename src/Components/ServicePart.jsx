import React from "react";
import { Link } from "react-router-dom";
import {useQuery} from '@tanstack/react-query'
import PageLoader from "../Loader/PageLoader";
import { getAllCategories } from "../Api/Functions/SeviceCategory.api";
import { ImageUrl } from "../Api/AxiosInstance/ImageUrl";

const ServicePart = () => {
  const {
    isLoading, isError, data: categoryData, error
  }=useQuery({
    queryKey: ['all_service_category'], 
    queryFn: getAllCategories 
  })
  if(isLoading){
    return <PageLoader/>
  }
  if(isError){
    return <h1>{error?.message}</h1>
  }
  return (
    <>
      {/* <!-- Categories Grid Section Begin --> */}
      <section class="categories-grid-section spad">
        <div class="container">
          <div className="about_heading">
            <h4>// Our Services //</h4>
            <h3 className="about_whychooseus">
              We do all these types of following services
            </h3>
          </div>

          <div class="row mt-5">
            {
              Array.isArray(categoryData) && categoryData?.map((item)=>(
                <>
                <div class="col-lg-4">
              <div class="cg-item">
                <div
                  class="cg-pic set-bg"
                >
                  <img src={`${ImageUrl}${item?.categoryImage}`} alt="photo" width="100%"/>
                </div>
                <div class="cg-text text-center">
                  <h5>
                    <a href="#">
                      {item?.categoryName}
                    </a>
                  </h5>
            
                  <Link
                    to={`/service/category/${item?._id}`}
                    
                  >
                    <button className="mt-3 py-2 px-4 carousel_btn">
                    Explore
                    </button>
                    
                  </Link>
                </div>
              </div>
            </div>
                </>
              ))
            }
          </div>
          
        </div>
      </section>
      {/* <!-- Categories Grid Section End --> */}
    </>
  );
};

export default ServicePart;
