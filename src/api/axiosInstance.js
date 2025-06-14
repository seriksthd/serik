import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://2c42987622e6348c.mokky.dev",
  timeout: 5000, 
  headers: {
    "Content-Type": "application/json",
  },
});