import axios from "axios";

export const api = axios.create({
  // baseURL: "https://food-delivery-dzet.onrender.com/",
  baseURL: "http://localhost:3010/",
  headers: {
    "Content-Type": "application/json",
  },
});
