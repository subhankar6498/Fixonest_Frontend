import { toast } from "react-toastify";
import axiosInstance from "../AxiosInstance/AxiosInstance";
import { endpoints } from "../EndPoints/EndPoints";

export const updatePassword = async (data) => {
  try {
    const response = await axiosInstance.post(endpoints.auth.updatepw, data);
    return response?.data;
  } catch (error) {
    console.log(error);
    toast.error(error?.message);
  }
};
