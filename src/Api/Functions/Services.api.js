import axiosInstance from "../AxiosInstance/AxiosInstance";
import { endpoints } from "../EndPoints/EndPoints";

export const getAllServices = async ({ page, perPage }) => {
  try {
    const response = await axiosInstance.get(
      `${endpoints.cms.allservices}?page=${page}&limit=${perPage}`
    );

    console.log(response.data);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
