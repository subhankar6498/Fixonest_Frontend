import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { updatePassword } from "../Api/Functions/UpdatePW.api";
import { toast } from "react-toastify";
import ButtonLoader from "../Loader/ButtonLoader";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate, isPending } = useMutation({
    mutationFn: (data) => updatePassword(data),
    onSuccess: (data) => {
      if (data?.status === 200) {
        console.log("updated data", data);
        Swal.fire({
          icon: "success",
          text: data?.message,
        });
        navigate("/");
      }
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.message);
    },
  });
  const onSubmitPW = async (data) => {
    mutate(data);
  };
  return (
    <>
      <div class="signup-section">
        <div class="signup-text">
          <div class="container">
            <div class="signup-title">
              <h2>Update Your Password</h2>
            </div>
            <form class="signup-form" onSubmit={handleSubmit(onSubmitPW)}>
              <div class="sf-input-list">
                <input
                  type="password"
                  class="input-value"
                  placeholder="Current Password*"
                  {...register("currentPassword", {
                    required: true,
                  })}
                />
                {errors?.currentPassword?.type === "required" && (
                  <p style={{ color: "red" }}>**Current Password is Required</p>
                )}
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
              {isPending ? (
                <ButtonLoader />
              ) : (
                <button type="submit" className="btn btn-danger">
                  <span>Save Changes</span>
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
