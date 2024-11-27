import axiosInstance from "../AxiosInstance/AxiosInstance";
import { endpoints } from "../EndPoints/EndPoints";

export const contactpost = async (data) => {
  try {
    const response = await axiosInstance.post(endpoints.cms.contact, data);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
