import axios from "axios";
// import {config} from "../config/index"
const BASE_URL = import.meta.env.VITE_API_SERVER
export default async function loginUser(data) {
    // console.log(config.API_SERVER)
  try {
    let res = await axios.post(`${BASE_URL}/users/login`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(res);
    if(res.data) return res;
  } catch (error) {
    // console.log(error);
    return error;
  }
}
