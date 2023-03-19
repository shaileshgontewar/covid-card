import axios from "axios";
const BASE_URL = "https://api.rootnet.in/covid19-in/stats/latest";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
