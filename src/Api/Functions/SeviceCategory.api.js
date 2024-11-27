import axiosInstance from "../AxiosInstance/AxiosInstance";
import { endpoints } from "../EndPoints/EndPoints";

export const getAllCategories = async () => {
  try {
    const response = await axiosInstance.get(
      endpoints.cms.allservicecategories
    );

    return response?.data?.data;
  } catch (error) {
    console.log(`Error in all categories api ${error}`);
  }
};
