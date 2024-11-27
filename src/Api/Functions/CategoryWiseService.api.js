import axiosInstance from "../AxiosInstance/AxiosInstance";
import { endpoints } from "../EndPoints/EndPoints";


export const getCatWiseServices=async(id)=>{
    try {
        const response=await axiosInstance.get(`${endpoints.cms.categorywiseservices}/${id}`)
        return response?.data?.data?.serviceDetails
    } catch (error) {
        console.log(error);
        
    }
}