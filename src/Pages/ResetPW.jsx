import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { resetpassword } from "../Api/Functions/ResetPw.api";
import { toast } from "react-toastify";

const ResetPW = () => {
  const { email, token } = useParams();
  // const abc=useParams()
  console.log("emailtoken", email, token);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => resetpassword(email, token, data),
    onSuccess: (data) => {
      if (data?.status === 200) {
        Swal.fire({
          icon: "success",
          title: data?.message,
        });
        navigate("/");
      }
    },
    onError: (err) => {
      console.log("error in sending email", err);
      toast.error(err?.message);
      reset();
    },
  });

  const onSubmitResetPW = (data) => {
    mutate(data);
  };
  return (
    <>
      <div class="signup-section">
        <div class="signup-text">
          <div class="container">
            <div class="signup-title">
              <h2>Reset Password</h2>
              <p>First you have to verify your email</p>
            </div>
            <form class="signup-form" onSubmit={handleSubmit(onSubmitResetPW)}>
              <div class="sf-input-list">
                <input
                  type="password"
                  class="input-value"
                  placeholder="New Password*"
                  {...register("newPassword", {
                    required: true,
                  })}
                />
                {errors?.newPassword?.type === "required" && (
                  <p style={{ color: "red" }}>**New Password is Required</p>
                )}
              </div>

              <div className="mb-3 text-white">
                <span className="mr-2">Remember password!!</span>
                <Link to="/login">Back to Login</Link>
              </div>

              <button type="submit">
                <span>Reset Password</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPW;
