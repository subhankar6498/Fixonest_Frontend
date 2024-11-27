import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getServiceDetails } from "../Api/Functions/ServiceDetails.api";
import { ImageUrl } from "../Api/AxiosInstance/ImageUrl";
import { useForm } from "react-hook-form";
import { bookingService } from "../Api/Functions/Booking.api";
import { toast } from "react-toastify";
import ButtonLoader from "../Loader/ButtonLoader";

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState([]);
  const [timeslot, setTimeslot] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const {
    data: detaildata,
  } = useQuery({
    queryKey: ["service_details", id],
    queryFn: () => getServiceDetails(id),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => bookingService(data),
    onSuccess: (data) => {
      if (data.status === 201) {
        console.log("booking data", data);
        toast(data?.message);
        navigate("/services");
      }
    },
    onError: (err) => {
      console.log(`Error in booking ${err}`);
      toast.error(err?.message);
    },
  });

  //for image change
  const imageChange = (e) => {
    const imgs = Array.from(e.target.files);
    setImage(imgs);
  };

  const bookingSubmit = (data) => {
    let formdata = new FormData();
    formdata.append("serviceCategory", data?.serviceCategory);
    formdata.append("subCategory", data?.subCategory);
    formdata.append("description", data?.description);
    formdata.append("preferredDate", data?.preferredDate);
    formdata.append("preferredTimeSlot", timeslot);
    image.forEach((i) => formdata.append("damagePhotos", i));

    mutate(formdata);
  };

  useEffect(() => {
    setValue("subCategory", detaildata?.title);
    setValue("serviceCategory", detaildata?.category_details[0].categoryName);
  }, [detaildata, setValue]);

  console.log("iii", image, timeslot);

  return (
    <>
      <div class="signup-section">
        <div class="signup-text">
          <div class="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-6 col-sm-12 form_img">
                <h4 className="form_heading">
                  Connect with us <br />
                  for witnessing the ultimate service
                </h4>
                <img
                  src={`${ImageUrl}/${detaildata?.serviceImage}`}
                  alt="photo"
                  width="100%"
                />
              </div>
              <div className="col-lg-6 col-sm-12">
                <div class="signup-title">
                  <h2>Book your Service now</h2>
                </div>
                <form
                  class="signup-form"
                  onSubmit={handleSubmit(bookingSubmit)}
                >
                  <div class="sf-input-list">
                    <input
                      type="text"
                      class="input-value"
                      placeholder="FullName*"
                      value={JSON.parse(localStorage.getItem("user")).fullName}
                    />

                    <input
                      type="email"
                      class="input-value"
                      placeholder="Your Email*"
                      value={JSON.parse(localStorage.getItem("user")).email}
                    />

                    <input
                      type="number"
                      class="input-value"
                      placeholder="Mobile No.*"
                      value={JSON.parse(localStorage.getItem("user")).mobileNo}
                    />

                    <label className="text-white">Address</label>
                    <div className="row">
                      <div className="col-lg-4">
                        <input
                          type="text"
                          class="input-value"
                          placeholder="Address*"
                          value={
                            JSON.parse(localStorage.getItem("user")).address
                              .street
                          }
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="text"
                          class="input-value"
                          placeholder="Address*"
                          value={
                            JSON.parse(localStorage.getItem("user")).address
                              .city
                          }
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="text"
                          class="input-value"
                          placeholder="Address*"
                          value={
                            JSON.parse(localStorage.getItem("user")).address
                              .state
                          }
                        />
                      </div>
                    </div>

                    <input
                      type="text"
                      class="input-value"
                      placeholder="ServiceName*"
                      {...register("subCategory")}
                    />
                    <input
                      type="text"
                      class="input-value"
                      placeholder="Category*"
                      {...register("serviceCategory")}
                    />

                    <input
                      type="text"
                      class="input-value"
                      placeholder="Issue Description*"
                      {...register("description", {
                        required: true,
                      })}
                    />
                    {errors?.description?.type === "required" && (
                      <p style={{ color: "red" }}>**This field is Required</p>
                    )}

                    <input
                      type="date"
                      class="input-value"
                      placeholder="Preferred Date*"
                      {...register("preferredDate", {
                        required: true,
                      })}
                    />
                    {errors?.preferredDate?.type === "required" && (
                      <p style={{ color: "red" }}>**This field is Required</p>
                    )}

                    <select
                      name="preferredTimeSlot"
                      value={timeslot}
                      onChange={(e) => setTimeslot(e.target.value)}
                    >
                      <option value="">Select Your Preferred Timeslot</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="morning">Morning</option>
                      <option value="evening">Evening</option>
                    </select>

                    <input
                      type="file"
                      class="input-value pt-2"
                      name="damagePhotos"
                      multiple
                      onChange={imageChange}
                    />
                    {image !== null && image !== undefined && image !== "" ? (
                      <>
                        <div style={{ display: "flex" }}>
                          {image.map((i) => (
                            <img
                              src={URL.createObjectURL(i)}
                              alt="PHOTO"
                              height="100px"
                              width="100px"
                            />
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        {image === null &&
                          image === undefined &&
                          image === "" && <p>Drag and Drop Image</p>}
                      </>
                    )}
                  </div>

                  {isPending ? (
                    <ButtonLoader />
                  ) : (
                    <button type="submit" className="mt-2">
                      <span>Submit</span>
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
