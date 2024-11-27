import axiosInstance from "../AxiosInstance/AxiosInstance";
import { endpoints } from "../EndPoints/EndPoints";

export const registration = async (data) => {
  try {
    const response = await axiosInstance.post(
      endpoints.auth.registration,
      data
    );
    // console.log("rrr", response);
    
    return response?.data;
  } catch (error) {
    console.log(`error in registration ${error}`);
  }
};
