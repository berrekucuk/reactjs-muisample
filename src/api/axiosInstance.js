import axios from "axios";


export const axiosIntance = axios.create({
    baseURL: "https://northwind.vercel.app/api/"
})