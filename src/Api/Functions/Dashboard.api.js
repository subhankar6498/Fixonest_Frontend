import axiosInstance from "../AxiosInstance/AxiosInstance";
import { endpoints } from "../EndPoints/EndPoints";


export const getProfileDetails=async()=>{
    try {
        const response=await axiosInstance.get(endpoints.auth.profile)
        return response?.data?.data
    } catch (error) {
        console.log(error);
        
    }
}