import React from "react";
import { Link } from "react-router-dom";

const AboutPart = () => {
  return (
    <>
      <div class="container-fluid aboutus">
        <div className="about_heading">
          <h4>Why Choose Us!!</h4>
          <h3 className="about_whychooseus">
            Helping and providing best service to our client business over 25
            years!!
          </h3>
        </div>
        <div class="container py-5">
          {/* {Array.isArray(aboutdata) &&
            aboutdata?.map((item, index) => (
              <> */}
          <div class="row align-items-center">
            <div class="col-lg-6 col-sm-12">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                //   src={`${ImageUrl}${item?.image}`}
                src="/img/aboutpart_img.jpg"
                alt=""
              />
            </div>
            <div class="col-lg-6 col-sm-12">
              <h6 className="text-white mb-2">{">>"} One-Stop Solution : </h6>
              <p>
                {/* {item?.description} */}
                We offer a wide range of services under one roof, making us your
                single point of contact for all your needs. From list services
                such as IT, maintenance, consulting, logistics, etc., we ensure
                convenience and efficiency.
              </p>

              <h6 className="text-white mb-2">{">>"} Cost-Effective and Time-Saving : </h6>
              <p>
                {/* {item?.description} */}
                Working with multiple providers can be costly and
                time-consuming. By choosing us, you consolidate services and
                streamline your operations, reducing overhead and boosting
                overall productivity.
              </p>
              <h6 className="text-white mb-2">{">>"} Reliable and Trusted Partner : </h6>
              <p>
                {/* {item?.description} */}
                Our commitment to excellence means you can count on us to meet
                deadlines, exceed expectations, and maintain a high standard of
                service. We pride ourselves on building long-term, trust-based
                relationships with our clients.
              </p>
              <Link
                    to="/"
                    
                  >
                    <button className="py-1 px-4 carousel_btn">
                    Learn More
                    </button>
                    
                  </Link>
            </div>
          </div>
          {/* </> */}
          {/* ))} */}
        </div>
      </div>
    </>
  );
};

export default AboutPart;
