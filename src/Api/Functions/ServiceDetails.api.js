import axiosInstance from "../AxiosInstance/AxiosInstance";
import { endpoints } from "../EndPoints/EndPoints";


export const getServiceDetails=async(id)=>{
    try {
      const response=await axiosInstance.get(`${endpoints.cms.servicedetails}/${id}`)
      return response?.data?.singledata[0]
    } catch (error) {
        console.log(error);
        
    }
}