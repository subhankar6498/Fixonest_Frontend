import axiosInstance from "../AxiosInstance/AxiosInstance";
import { endpoints } from "../EndPoints/EndPoints";


export const getBookingDetails=async(id)=>{
    try {
       const response=await axiosInstance.get(`${endpoints.cms.viewbooking}/${id}`)
       return response?.data?.data
    } catch (error) {
        console.log(error);
        
    }
}