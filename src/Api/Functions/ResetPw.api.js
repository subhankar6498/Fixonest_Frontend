import axiosInstance from "../AxiosInstance/AxiosInstance";
import { endpoints } from "../EndPoints/EndPoints";


export const resetpassword=async(data, token, payload)=>{
    try {
        const response=await axiosInstance.post(`${endpoints.auth.resetpw}/${data}/${token}`, payload)
        return response?.data
    } catch (error) {
        console.log(`Error in reset password ${error}`);
        
    }
}