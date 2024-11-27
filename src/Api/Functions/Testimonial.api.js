import axiosInstance from "../AxiosInstance/AxiosInstance";
import { endpoints } from "../EndPoints/EndPoints";


export const getAllTestimonials=async()=>{
    try {
        const response=await axiosInstance.get(endpoints.cms.testimonials)
        return response?.data?.testimonials
    } catch (error) {
        console.log(error);
        
    }
}