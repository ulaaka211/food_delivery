import axios from "axios";

export const api = axios.create({
  baseURL: "https://food-delivery-dzet.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
