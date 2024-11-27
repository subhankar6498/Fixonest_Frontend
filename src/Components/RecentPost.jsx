import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllServices } from "../Api/Functions/Services.api";
import PageLoader from "../Loader/PageLoader";
import { ImageUrl } from "../Api/AxiosInstance/ImageUrl";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const RecentPost = () => {
  const {
    isLoading,
    isError,
    data: recentpostdata,
    error,
  } = useQuery({
    queryKey: ["recent_posts"],
    queryFn: getAllServices,
  });
  if (isLoading) {
    return <PageLoader />;
  }
  if (isError) {
    return <h1>{error?.message}</h1>;
  }
  return (
    <>
      <div class="hardware-guides">
        <div class="section-title">
          <h5>Recent posts</h5>
        </div>
        {Array.isArray(recentpostdata?.data) &&
          recentpostdata?.data
            ?.slice(0, 5)
            .reverse()
            .map((item) => (
              <>
                <div class="trending-item">
                  <div class="ti-pic">
                    <img
                      src={`${ImageUrl}/${item?.serviceImage}`}
                      alt=""
                      height={80}
                      width={120}
                    />
                  </div>
                  <div class="ti-text">
                    <Link to={`/service/details/${item._id}`}>
                      <h6>
                        <a href="#">{item?.title}</a>
                      </h6>
                    </Link>
                    <ul>
                      <li>
                        <i class="fa fa-clock-o"></i>{" "}
                        {format(new Date(item?.createdAt), "MMM dd, yyyy")}
                      </li>
                      <li>
                        <i class="fa fa-comment-o"></i> 12
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ))}
      </div>
    </>
  );
};

export default RecentPost;
