import React from "react";
import PageLoader from "../Loader/PageLoader";
import { getAllCategories } from "../Api/Functions/SeviceCategory.api";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import RecentPost from "./RecentPost";

const SideBar = () => {
  const {
    isLoading,
    isError,
    data: categoryData,
    error,
  } = useQuery({
    queryKey: ["all_service_category"],
    queryFn: getAllCategories,
  });
  if (isLoading) {
    return <PageLoader />;
  }
  if (isError) {
    return <h1>{error?.message}</h1>;
  }
  return (
    <>
      <div class="sidebar-option">
        <div class="social-media">
          <div class="section-title">
            <h5>Category</h5>
          </div>
          <ul>
            {Array.isArray(categoryData) &&
              categoryData?.map((item) => (
                <>
                  <Link to={`/service/category/${item._id}`}>
                    <li>
                      <div class="sm-icon">
                        <i class="fa fa-angle-right"></i>
                        <i class="fa fa-angle-right"></i>
                      </div>
                      <span>{item?.categoryName}</span>
                    </li>
                  </Link>
                </>
              ))}
          </ul>
        </div>

        <RecentPost />

        {/* <div class="best-of-post">
          <div class="section-title">
            <h5>Best of Posts</h5>
          </div>
          <div class="bp-item">
            <div class="bp-loader">
              <div class="loader-circle-wrap">
                <div class="loader-circle">
                  <span
                    class="circle-progress-1"
                    data-cpid="id-1"
                    data-cpvalue="95"
                    data-cpcolor="#c20000"
                  ></span>
                  <div class="review-point">9.5</div>
                </div>
              </div>
            </div>
            <div class="bp-text">
              <h6>
                <a href="#">This gaming laptop with a GTX 1660...</a>
              </h6>
              <ul>
                <li>
                  <i class="fa fa-clock-o"></i> Aug 01, 2019
                </li>
                <li>
                  <i class="fa fa-comment-o"></i> 20
                </li>
              </ul>
            </div>
          </div>
          <div class="bp-item">
            <div class="bp-loader">
              <div class="loader-circle-wrap">
                <div class="loader-circle">
                  <span
                    class="circle-progress-1"
                    data-cpid="id-2"
                    data-cpvalue="85"
                    data-cpcolor="#c20000"
                  ></span>
                  <div class="review-point">8.5</div>
                </div>
              </div>
            </div>
            <div class="bp-text">
              <h6>
                <a href="#">This gaming laptop with a GTX 1660...</a>
              </h6>
              <ul>
                <li>
                  <i class="fa fa-clock-o"></i> Aug 01, 2019
                </li>
                <li>
                  <i class="fa fa-comment-o"></i> 20
                </li>
              </ul>
            </div>
          </div>
          <div class="bp-item">
            <div class="bp-loader">
              <div class="loader-circle-wrap">
                <div class="loader-circle">
                  <span
                    class="circle-progress-1"
                    data-cpid="id-3"
                    data-cpvalue="80"
                    data-cpcolor="#c20000"
                  ></span>
                  <div class="review-point">8.0</div>
                </div>
              </div>
            </div>
            <div class="bp-text">
              <h6>
                <a href="#">This gaming laptop with a GTX 1660...</a>
              </h6>
              <ul>
                <li>
                  <i class="fa fa-clock-o"></i> Aug 01, 2019
                </li>
                <li>
                  <i class="fa fa-comment-o"></i> 20
                </li>
              </ul>
            </div>
          </div>
          <div class="bp-item">
            <div class="bp-loader">
              <div class="loader-circle-wrap">
                <div class="loader-circle">
                  <span
                    class="circle-progress-1"
                    data-cpid="id-4"
                    data-cpvalue="75"
                    data-cpcolor="#c20000"
                  ></span>
                  <div class="review-point">7.5</div>
                </div>
              </div>
            </div>
            <div class="bp-text">
              <h6>
                <a href="#">This gaming laptop with a GTX 1660...</a>
              </h6>
              <ul>
                <li>
                  <i class="fa fa-clock-o"></i> Aug 01, 2019
                </li>
                <li>
                  <i class="fa fa-comment-o"></i> 20
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default SideBar;
