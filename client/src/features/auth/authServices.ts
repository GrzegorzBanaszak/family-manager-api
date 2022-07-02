import axios from "../../axiosConfig";
import { LoginData, RegisterData } from "../../types";

const HTTPS_URL: string = "http://localhost:5000/api/user/";

const login = async (data: LoginData) => {
  const res = await axios.post(HTTPS_URL + "login", data);

  return res.data;
};

const register = async (data: RegisterData) => {
  const res = await axios.post(HTTPS_URL + "register", data);
  return res.data;
};

const getUser = async () => {
  const res = await axios.get(HTTPS_URL + "me");

  return res.data;
};

const logout = async () => {
  const res = await axios.get(HTTPS_URL + "logout");

  return res.data;
};

const familyCheck = async (verificationKey: string) => {
  const res = await axios.get(
    "http://localhost:5000/api/family/verification/" + verificationKey
  );

  return res.data;
};
const authServices = { login, familyCheck, register, getUser, logout };
export default authServices;
