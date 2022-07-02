import axios from "../../axiosConfig";
import { LoginData } from "./authTypes";

const HTTPS_URL: string = "http://localhost:5000/api/user/";

const login = async (data: LoginData) => {
  const res = await axios.post(HTTPS_URL + "login", data);

  return res.data;
};

const authServices = { login };
export default authServices;
