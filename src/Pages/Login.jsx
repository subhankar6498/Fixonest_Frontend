import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../Api/Functions/Login.api";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../Redux/AuthSlice";

const Login = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => userLogin(data),
    onSuccess: (data) => {
      if (data?.status === 200) {
        console.log("login data", data);
        localStorage.setItem("token", data?.token);
        localStorage.setItem("user", JSON.stringify(data?.data));

        Swal.fire({
          icon: "success",
          title: data?.message,
        });
        navigate("/");
      }
    },
    onError: (err) => {
      console.log("error msz", err);
      toast.error(err?.message);
      reset();
    },
  });

  const onSubmitLogin = (data) => {
    mutate(data, {
      onSuccess: (res) => dispatch(setLogin()),
    });
  };
  return (
    <>
      {/* <!-- Sign Up Section Begin --> */}
      <div class="signup-section">
        <div class="signup-text">
          <div class="container">
            <div class="signup-title">
              <h2>Sign in</h2>
              <p>Fill out the form with your email and password</p>
            </div>
            <form class="signup-form" onSubmit={handleSubmit(onSubmitLogin)}>
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
                <input
                  type="password"
                  class="input-value"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                  })}
                />
                {errors?.password?.type === "required" && (
                  <p style={{ color: "red" }}>**Password is Required</p>
                )}
              </div>
              <div className="d-flex">
              <div className="mb-3 text-white">
                <span className="mr-2">New User!</span>
                <Link to="/register">Register Here</Link>
              </div>
              <div className="mb-3 text-white ml-auto">
                <Link to="/forgot_password"><em>Forgot Password!</em></Link>
              </div>
              </div>
              
              <button type="submit">
                <span>Login</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Sign Up Section End --> */}
    </>
  );
};

export default Login;
