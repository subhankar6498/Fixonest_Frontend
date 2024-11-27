import React from 'react'

const TeamPart = () => {
  return (
    <>
        
        <div class="container-fluid aboutus">
        <div class="container pt-5 pb-3">
        <div className="about_heading">
          <h4>// Our Expert Team //</h4>
          <h3 className="about_whychooseus mb-5">
            Meet our expert technicians who has years of experience
          </h3>
        </div>
          <div class="row">
            {/* {Array.isArray(teacherdata) &&
              teacherdata?.map((item) => (
                <> */}
                  <div class="col-md-6 col-lg-3 text-center team mb-4">
                    <div class="team-item rounded overflow-hidden mb-2">
                      <div class="team-img position-relative">
                        <img
                          class="img-fluid"
                          // src={`${ImageUrl}${item.photo}`}
                          src="/img/team/team-1.jpg"
                          alt="team_image"
                          style={{height: "350px", width: "100%"}}
                        />
                        <div class="team-social">
                          <a
                            class="btn btn-outline-light btn-square mx-1"
                            href="#"
                          >
                            <i class="fa fa-twitter"></i>
                          </a>
                          <a
                            class="btn btn-outline-light btn-square mx-1"
                            href="#"
                          >
                            <i class="fa fa-facebook-f"></i>
                          </a>
                          <a
                            class="btn btn-outline-light btn-square mx-1"
                            href="#"
                          >
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                      <div class="bg-secondary p-4">
                        <h5 className='team_designation'>
                          {/* {item.name} */}
                          Electrician
                        </h5>
                        <p class="m-0">
                          {/* {item.designation} */}
                          5 years Experience
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-3 text-center team mb-4">
                    <div class="team-item rounded overflow-hidden mb-2">
                      <div class="team-img position-relative">
                        <img
                          class="img-fluid"
                          // src={`${ImageUrl}${item.photo}`}
                          src="/img/team/team-2.jpg"
                          alt="team_image"
                          style={{height: "350px", width: "100%"}}
                        />
                        <div class="team-social">
                          <a
                            class="btn btn-outline-light btn-square mx-1"
                            href="#"
                          >
                            <i class="fa fa-twitter"></i>
                          </a>
                          <a
                            class="btn btn-outline-light btn-square mx-1"
                            href="#"
                          >
                            <i class="fa fa-facebook-f"></i>
                          </a>
                          <a
                            class="btn btn-outline-light btn-square mx-1"
                            href="#"
                          >
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                      <div class="bg-secondary p-4">
                        <h5 className='team_designation'>
                          {/* {item.name} */}
                          Plumber
                        </h5>
                        <p class="m-0">
                          {/* {item.designation} */}
                          10 years Experience
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-3 text-center team mb-4">
                    <div class="team-item rounded overflow-hidden mb-2">
                      <div class="team-img position-relative">
                        <img
                          class="img-fluid"
                          // src={`${ImageUrl}${item.photo}`}
                          src="/img/team/team-3.jpg"
                          alt="team_image"
                          style={{height: "350px", width: "100%"}}
                        />
                        <div class="team-social">
                          <a
                            class="btn btn-outline-light btn-square mx-1"
                            href="#"
                          >
                            <i class="fa fa-twitter"></i>
                          </a>
                          <a
                            class="btn btn-outline-light btn-square mx-1"
                            href="#"
                          >
                            <i class="fa fa-facebook-f"></i>
                          </a>
                          <a
                            class="btn btn-outline-light btn-square mx-1"
                            href="#"
                          >
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                      <div class="bg-secondary p-4">
                        <h5 className='team_designation'>
                          {/* {item.name} */}
                          Technician
                        </h5>
                        <p class="m-0">
                          {/* {item.designation} */}
                          5 years Experience
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-3 text-center team mb-4">
                    <div class="team-item rounded overflow-hidden mb-2">
                      <div class="team-img position-relative">
                        <img
                          class="img-fluid"
                          // src={`${ImageUrl}${item.photo}`}
                          src="/img/team/team-4.jpg"
                          alt="team_image"
                          style={{height: "350px", width: "100%"}}
                        />
                        <div class="team-social">
                          <a
                            class="btn btn-outline-light btn-square mx-1"
                            href="#"
                          >
                            <i class="fa fa-twitter"></i>
                          </a>
                          <a
                            class="btn btn-outline-light btn-square mx-1"
                            href="#"
                          >
                            <i class="fa fa-facebook-f"></i>
                          </a>
                          <a
                            class="btn btn-outline-light btn-square mx-1"
                            href="#"
                          >
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                      <div class="bg-secondary p-4">
                        <h5 className='team_designation'>
                          {/* {item.name} */}
                          Cleaner
                        </h5>
                        <p class="m-0">
                          {/* {item.designation} */}
                          7 years Experience
                        </p>
                      </div>
                    </div>
                  </div>
                {/* </>
              ))} */}
          </div>
        </div>
      </div>

    </>
  )
}

export default TeamPart