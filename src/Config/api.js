import axios from "axios"

export const API_BASE_URL="https://backend-twitter-api.onrender.com/Twitter"

export const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json"
    }
})
