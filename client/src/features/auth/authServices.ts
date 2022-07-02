import axios from "../../axiosConfig";
import { LoginData } from "../../types";

const HTTPS_URL: string = "http://localhost:5000/api/user/";

const login = async (data: LoginData) => {
  const res = await axios.post(HTTPS_URL + "login", data);

  return res.data;
};

const familyCheck = async (verificationKey: string) => {
  const res = await axios.get(
    "http://localhost:5000/api/family/verification/" + verificationKey
  );

  return res.data;
};
const authServices = { login, familyCheck };
export default authServices;
