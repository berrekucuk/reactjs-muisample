import { axiosIntance } from "./axiosInstance"


export const baseService = {
    getAll: async (url) => {
        var result = await axiosIntance.get(url)
        return result.data
    },
    create: async (url,data) =>{
        var result = await axiosIntance.post(url,data)
        return result.data
    }
}