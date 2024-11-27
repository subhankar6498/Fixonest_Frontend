import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../Api/AxiosInstance/AxiosInstance";
import { toast } from "react-toastify";

const EmailVerification = () => {
  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const url = `confirmation/${params.id}/${params.email}/${params.token}`;
        const response = await axiosInstance.get(url); // call the API
        // console.log(response.data);

        if (response.data.isVerified) {
          // Show the veirfied message
          toast.success(response.data.message);

          // Redirect to login page
          navigate("/login");
        } else {
          // Show Expire message
          toast.error("Verification link has expired.");
          navigate("/login");
        }
      } catch (error) {
        toast.error(error);
      }
    };

    verifyEmail();
  }, [params, navigate]);
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default EmailVerification;
