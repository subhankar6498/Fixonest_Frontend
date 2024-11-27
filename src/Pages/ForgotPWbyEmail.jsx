import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { forgetPWEmailVerification } from "../Api/Functions/EmailForgetPW.api";
import ButtonLoader from "../Loader/ButtonLoader";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ForgotPWbyEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => forgetPWEmailVerification(data),
    onSuccess: (data) => {
      // console.log("data", data);
      if (data?.status === 200) {
        Swal.fire({
          icon: "info",
          title: data?.message,
        });
        reset();
      }
    },
    onError: (err) => {
      console.log("error in sending email", err);
      toast.error(err?.message);
      reset();
    },
  });

  const onSubmitForgetPW = (data) => {
    console.log("ddd", data);

    mutate(data);
  };
  console.log("eee", watch());

  return (
    <>
      {/* <!-- Sign Up Section Begin --> */}
      <div class="signup-section">
        <div class="signup-text">
          <div class="container">
            <div class="signup-title">
              <h2>Forget Password!!!</h2>
              <p>First you have to verify your email</p>
            </div>
            <form class="signup-form" onSubmit={handleSubmit(onSubmitForgetPW)}>
              <div class="sf-input-list">
                <input
                  type="email"
                  class="input-value"
                  placeholder="Email Address"
                  {...register("email", {
                    required: true,
                  })}
                />
                {errors?.email?.type === "required" && (
                  <p style={{ color: "red" }}>**Email is Required</p>
                )}
              </div>

              <div className="mb-3 text-white">
                <span className="mr-2">Remember password!!</span>
                <Link to="/login">Back to Login</Link>
              </div>

              {isPending ? (
                <ButtonLoader />
              ) : (
                <button type="submit">
                  <span>Submit</span>
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

export default ForgotPWbyEmail;
