import React from "react";
import TeamPart from "../Components/TeamPart";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <>
      {/* <!-- Header Start --> */}
      <div class="container-fluid page-header">
        <div class="container">
          <div
            class="d-flex flex-column justify-content-center"
            style={{ minHeight: "400px" }}
          >
            <h3 class="display-4 text-white text-uppercase">Our Team</h3>
            <div class="d-inline-flex text-white">
              <p class="m-0 text-uppercase">
                <Link class="text-white" to="/">
                  Home
                </Link>
              </p>
              <i class="fa fa-angle-double-right pt-1 px-3"></i>
              <p class="m-0 text-uppercase">Team</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}

      <TeamPart />
    </>
  );
};

export default Team;
