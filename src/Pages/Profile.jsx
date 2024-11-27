import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Avatar,
  Box,
  Card,
  Container,
  Grid,
  Tab,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProfileDetails } from "../Api/Functions/Dashboard.api";
import PageLoader from "../Loader/PageLoader";
import { ImageUrl } from "../Api/AxiosInstance/ImageUrl";
import { getBookingDetails } from "../Api/Functions/ViewBooking.api";

const Profile = () => {
  const userId = JSON.parse(localStorage.getItem("user"))._id;
  const {
    isLoading: profileLoading,
    isError: profileError,
    data: memberdata,
    error: profileErr,
  } = useQuery({
    queryKey: ["member_details"],
    queryFn: getProfileDetails,
  });

  const {
    isLoading: bookingLoading,
    isError: bookingError,
    data: bookingdata,
    error: bookingErr,
  } = useQuery({
    queryKey: ["booking_details", userId],
    queryFn: () => getBookingDetails(userId),
    retry: false, // Don't retry on error
  });

  const [value, setValue] = useState("1");
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  // Show loader if either profile or booking data is loading
  if (profileLoading || bookingLoading) {
    return <PageLoader />;
  }

  // Show profile error if it exists
  if (profileError) {
    return <h1>Error loading profile: {profileErr?.message}</h1>;
  }

  // Get booking count safely
  const bookingCount = bookingdata?.bookings?.length || 0;

  return (
    <>
      {/* <!-- Header Start --> */}
      <div className="container-fluid service-header">
        <div className="container">
          <div
            className="d-flex flex-column justify-content-center"
            style={{ minHeight: "300px" }}
          >
            <h3 className="display-4 text-white text-uppercase">
              Member Dashboard
            </h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase">
                <Link className="text-white" to="/">
                  Home
                </Link>
              </p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 text-uppercase">Profile</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}

      {/* Page content */}
      <Box style={{ backgroundColor: "#151414" }}>
        <Box className="profile_box">
          <Card className="profile_card">
            <Grid container>
              <Grid xs={12} sm={4} className="profile_avatar">
                <Avatar
                  alt="P"
                  src={`${ImageUrl}/${
                    JSON.parse(localStorage.getItem("user")).profileImage
                  }`}
                  sx={{ height: "100px", width: "100px", margin: "30px auto" }}
                />
                <h4 style={{ textAlign: "center", color: "white" }}>
                  {memberdata?.firstName} {memberdata?.lastName}
                </h4>
              </Grid>
              <Grid xs={12} sm={8} className="profile_info">
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider #ccc" }}>
                    <TabList
                      onChange={handleChange}
                      textColor="secondary"
                      indicatorColor="secondary"
                    >
                      <Tab
                        label="Information"
                        sx={{ color: "white" }}
                        value="1"
                      />
                      <Tab
                        label="MyBookings"
                        sx={{ color: "white" }}
                        value="2"
                      />
                    </TabList>
                  </Box>

                  <TabPanel value="1">
                    <Typography variant="h6">
                      Name : {memberdata?.firstName} {memberdata?.lastName}
                    </Typography>
                    <Typography variant="h6">
                      Email : {memberdata?.email}
                    </Typography>
                    <Typography variant="h6">
                      Contact No. : {memberdata?.mobileNo}
                    </Typography>
                    <Typography variant="h6">
                      Address : {memberdata?.address?.street},{" "}
                      {memberdata?.address?.city}
                    </Typography>
                    <Typography variant="h6">
                      State : {memberdata?.address?.state}
                    </Typography>
                    <Typography variant="h6">
                      MyBookings : {bookingCount}
                    </Typography>
                  </TabPanel>

                  <TabPanel value="2">
                    {bookingError ? (
                      <Typography
                        variant="h6"
                        sx={{ color: "white", textAlign: "center" }}
                      >
                        No bookings available
                      </Typography>
                    ) : bookingCount > 0 ? (
                      bookingdata.bookings.map((item) => (
                        <Grid
                          container
                          spacing={2}
                          sx={{ marginBottom: 3 }}
                          key={item._id}
                        >
                          <Grid item xs={6}>
                            <Typography
                              variant="h6"
                              className="booking_headings"
                            >
                              Service Name
                            </Typography>
                            <Typography
                              variant="body2"
                              className="booking_names"
                            >
                              {item?.service?.name}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography
                              variant="h6"
                              className="booking_headings"
                            >
                              Status
                            </Typography>
                            <Typography
                              variant="body2"
                              className="booking_status"
                            >
                              {item?.status}
                            </Typography>
                          </Grid>
                        </Grid>
                      ))
                    ) : (
                      <Typography
                        variant="h6"
                        sx={{ color: "white", textAlign: "center" }}
                      >
                        No bookings available
                      </Typography>
                    )}
                  </TabPanel>
                </TabContext>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
