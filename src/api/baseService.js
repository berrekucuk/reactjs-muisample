import { axiosInstance } from "./axiosInstance"


export const baseService = {
    getAll: async (url) => {
        var result = await axiosInstance.get(url)
        return result.data
    },
    getById : async (url,id) =>{
        var result = await axiosInstance.get(url + "/" + id)
        return result.data
    },
    create: async (url,data) =>{
        var result = await axiosInstance.post(url,data)
        return result.data
    },
    delete: async (url,id) => {
        var result = await axiosInstance.delete(url + "/" + id)
        return result.data
    },
    update: async (url,data) =>{
        var result = await axiosInstance.put(url,data)
        return result.data
    }
    
}