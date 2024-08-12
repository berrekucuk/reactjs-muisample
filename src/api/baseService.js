import { axiosIntance } from "./axiosInstance"


export const baseService = {
    getAll: async (url) => {
        var result = await axiosIntance.get(url)
        return result.data
    },
    getById : async (url,id) =>{
        var result = await axiosIntance.get(url + "/" + id)
        return result.data
    },
    create: async (url,data) =>{
        var result = await axiosIntance.post(url,data)
        return result.data
    },
    delete: async (url,id) => {
        var result = await axiosIntance.delete(url + "/" + id)
        return result.data
    },
    update: async (url,data) =>{
        var result = await axiosIntance.put(url,data)
        return result.data
    }
    
}