import axiosInstance from "../AxiosInstance/AxiosInstance";
import { endpoints } from "../EndPoints/EndPoints";


export const bookingService=async(data)=>{
    try {
        const response=await axiosInstance.post(endpoints.cms.booking, data)
        return response?.data
    } catch (error) {
        console.log(error);
        
    }
}