import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { contactpost } from "../Api/Functions/Contact.api";
import ButtonLoader from "../Loader/ButtonLoader";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => contactpost(data),
    onSuccess: (data) => {
      if (data?.status === 200) {
        console.log("contact data", data);
        toast.success(data?.message);
        reset();
      }
    },
    onError: (err) => {
      console.log("error msz", err);
      toast.error(err?.message);
      reset();
    },
  });

  const onSubmitContact = (data) => {
    mutate(data);
  };
  return (
    <>
      {/* <!-- Breadcrumb Section Begin --> */}
      <div class="container-fluid contact-header">
        <div class="container">
          <div
            class="d-flex flex-column justify-content-center"
            style={{ minHeight: "400px" }}
          >
            <h3 class="display-4 text-white text-uppercase">Contact Us</h3>
            <div class="d-inline-flex text-white">
              <p class="m-0 text-uppercase">
                <Link class="text-white" to="/">
                  Home
                </Link>
              </p>
              <i class="fa fa-angle-double-right pt-1 px-3"></i>
              <p class="m-0 text-uppercase">Contact</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- Contact Section Begin --> */}
      <section class="contact-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="contact-text">
                <div class="contact-title">
                  <h3>Contact us</h3>
                  <p>
                    Have any query regarding some issue? Please fill the
                    required fields
                  </p>
                </div>
                <div class="contact-form">
                  <div class="dt-leave-comment">
                    <form onSubmit={handleSubmit(onSubmitContact)}>
                      <div class="input-list">
                        <input
                          type="text"
                          placeholder="Name*"
                          {...register("name", {
                            required: true,
                            minLength: 3,
                          })}
                        />
                        {errors?.name?.type === "required" && (
                          <p style={{ color: "red" }}>**Name is Required</p>
                        )}
                        {errors?.name?.type === "minLength" && (
                          <p style={{ color: "red" }}>
                            **Name must be greater than 3 characters
                          </p>
                        )}

                        <input
                          type="text"
                          placeholder="Email*"
                          {...register("email", {
                            required: true,
                            pattern:
                              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                          })}
                        />
                        {errors?.email?.type === "required" && (
                          <p style={{ color: "red" }}>**Email is Required</p>
                        )}
                        {errors?.email?.type === "pattern" && (
                          <p style={{ color: "red" }}>**Invalid Email Format</p>
                        )}

                        <input
                          type="text"
                          placeholder="Phone No*"
                          {...register("phone", {
                            required: true,
                            minLength: 10,
                            maxLength: 10,
                          })}
                        />
                        {errors?.phone?.type === "required" && (
                          <p style={{ color: "red" }}>
                            **Mobile No. is Required
                          </p>
                        )}
                        {errors?.phone?.type === "minLength" && (
                          <p style={{ color: "red" }}>
                            **Mobile No. must have 10 characters
                          </p>
                        )}
                        {errors?.phone?.type === "maxLength" && (
                          <p style={{ color: "red" }}>
                            **Mobile No. must not exceed 10 characters
                          </p>
                        )}
                      </div>
                      <textarea
                        placeholder="Message*"
                        {...register("message", {
                          required: true,
                          minLength: 6,
                        })}
                      ></textarea>
                      {errors?.message?.type === "required" && (
                        <p style={{ color: "red" }}>**Message is Required</p>
                      )}
                      {errors?.message?.type === "minLength" && (
                        <p style={{ color: "red" }}>
                          **Message must be at least 6 characters long
                        </p>
                      )}

                      {isPending ? (
                        <ButtonLoader />
                      ) : (
                        <button type="submit">Submit</button>
                      )}
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58949.25962269764!2d88.27898604863277!3d22.5668054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a8e34982ff%3A0x5c83faab62209aed!2sTAKECARE%20IT%20SOLUTION!5e0!3m2!1sen!2sin!4v1731163883440!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact Section End --> */}
    </>
  );
};

export default Contact;
