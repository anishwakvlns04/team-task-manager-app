import axios from "axios";

const API = axios.create({
  baseURL: "https://blissful-nature-production-7368.up.railway.app"
});

export default API;
