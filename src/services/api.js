import axios from "axios";

export const key = "<YOUR_API_KEY>";
export const API = axios.create({
  baseURL: `https://api.themoviedb.org/3/`
});
