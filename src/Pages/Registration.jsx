import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registration } from "../Api/Functions/registration.api";
import Swal from "sweetalert2";
import ButtonLoader from "../Loader/ButtonLoader";
import { toast } from "react-toastify";

const Registration = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => registration(data),
    onSuccess: (data) => {
      if (data?.status === 201) {
        console.log("user data", data);
        Swal.fire({
          icon: "info",
          title: data?.message,
          text: data?.info,
        });
        navigate("/login");
      }
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.message);
    },
  });

  const onSubmitRegister = (data) => {
    try {
      let formdata = new FormData();
      formdata.append("firstName", data?.firstName);
      formdata.append("lastName", data?.lastName);
      formdata.append("email", data?.email);
      formdata.append("mobileNo", data?.mobileNo);
      formdata.append("country", data?.country);
      formdata.append("city", data?.city);
      formdata.append("state", data?.state);
      formdata.append("street", data?.street);
      formdata.append("landmark", data?.landmark);
      formdata.append("pincode", data?.pincode);
      formdata.append("password", data?.password);
      formdata.append("profileImage", image);
      mutate(formdata);
    } catch (error) {
      console.log(`Error in registering user ${error}`);
    }
  };

  //   console.log(watch());

  return (
    <>
      {/* <!-- Sign Up Section Begin --> */}
      <div class="signup-section">
        <div class="signup-text">
          <div class="container">
            <div class="signup-title">
              <h2>Sign up</h2>
              <p>Fill out the form below to recieve a free and confidential</p>
            </div>
            <form class="signup-form" onSubmit={handleSubmit(onSubmitRegister)}>
              <div class="sf-input-list">
                <input
                  type="text"
                  class="input-value"
                  placeholder="FirstName*"
                  {...register("firstName", {
                    required: true,
                    minLength: 3,
                  })}
                />
                {errors?.firstName?.type === "required" && (
                  <p style={{ color: "red" }}>**This field is required</p>
                )}
                {errors?.firstName?.type === "minLength" && (
                  <p style={{ color: "red" }}>
                    **This field must contains at least 3 characters
                  </p>
                )}

                <input
                  type="text"
                  class="input-value"
                  placeholder="LastName*"
                  {...register("lastName", {
                    required: true,
                    minLength: 3,
                  })}
                />
                {errors?.lastName?.type === "required" && (
                  <p style={{ color: "red" }}>**This field is required</p>
                )}
                {errors?.lastName?.type === "minLength" && (
                  <p style={{ color: "red" }}>
                    **This field must contains at least 3 characters
                  </p>
                )}

                <input
                  type="email"
                  class="input-value"
                  placeholder="Your Email*"
                  {...register("email", {
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                />
                {errors?.email?.type === "required" && (
                  <p style={{ color: "red" }}>**This field is required</p>
                )}
                {errors?.email?.type === "pattern" && (
                  <p style={{ color: "red" }}>**Invalid Email Format</p>
                )}

                <input
                  type="number"
                  class="input-value"
                  placeholder="Mobile No.*"
                  {...register("mobileNo", {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                  })}
                />
                {errors?.mobileNo?.type === "required" && (
                  <p style={{ color: "red" }}>**This field is required</p>
                )}
                {errors?.mobileNo?.type === "minLength" && (
                  <p style={{ color: "red" }}>
                    **Mobile No. must have 10 characters
                  </p>
                )}
                {errors?.mobileNo?.type === "maxLength" && (
                  <p style={{ color: "red" }}>
                    **Mobile No. must not exceed 10 characters
                  </p>
                )}

                <input
                  type="text"
                  class="input-value"
                  placeholder="Street*"
                  {...register("street", {
                    required: true,
                  })}
                />
                {errors?.street?.type === "required" && (
                  <p style={{ color: "red" }}>**This field is required</p>
                )}

                <input
                  type="text"
                  class="input-value"
                  placeholder="City*"
                  {...register("city", {
                    required: true,
                  })}
                />
                {errors?.city?.type === "required" && (
                  <p style={{ color: "red" }}>**This field is required</p>
                )}

                <input
                  type="text"
                  class="input-value"
                  placeholder="State*"
                  {...register("state", {
                    required: true,
                  })}
                />
                {errors?.state?.type === "required" && (
                  <p style={{ color: "red" }}>**This field is required</p>
                )}

                <input
                  type="number"
                  class="input-value"
                  placeholder="PinCode*"
                  {...register("pincode", {
                    required: true,
                  })}
                />
                {errors?.pincode?.type === "required" && (
                  <p style={{ color: "red" }}>**This field is required</p>
                )}

                <input
                  type="text"
                  class="input-value"
                  placeholder="LandMark*"
                  {...register("landmark", {
                    required: true,
                  })}
                />
                {errors?.landmark?.type === "required" && (
                  <p style={{ color: "red" }}>**This field is required</p>
                )}

                <input
                  type="text"
                  class="input-value"
                  placeholder="Country"
                  {...register("country")}
                />

                <input
                  type="password"
                  class="input-value"
                  placeholder="Password*"
                  {...register("password", {
                    required: true,
                  })}
                />
                {errors?.password?.type === "required" && (
                  <p style={{ color: "red" }}>**This field is required</p>
                )}

                <input
                  type="file"
                  class="input-value pt-2"
                  name="profileImage"
                  id="profileImage"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                {image !== null && image !== undefined && image !== "" ? (
                  <>
                    <img
                      src={URL.createObjectURL(image)}
                      alt="PHOTO"
                      height="120px"
                      width="120px"
                    />
                  </>
                ) : (
                  <>
                    {image === null && image === undefined && image === "" && (
                      <p>Drag and Drop Image</p>
                    )}
                  </>
                )}
              </div>
              <div className="mb-3 text-white">
                <span className="mr-2">Already User!</span>
                <Link to="/login">Login now</Link>
              </div>
              {isPending ? (
                <ButtonLoader />
              ) : (
                <button type="submit">
                  <span>REGISTER NOW</span>
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Sign Up Section End --> */}
    </>
  );
};

export default Registration;
