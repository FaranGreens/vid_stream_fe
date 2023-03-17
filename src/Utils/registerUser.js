import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_SERVER
export default async function registerUser(data) {
    
  try {
    let res = await axios.post(`${BASE_URL}/users/register`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    if(res.data) return res;
  } catch (error) {
    console.log(error);
    return error;
  }
}
