import axios, { USER_URL, FAMILY_URL } from "../../axiosConfig";
import qs from "qs";
import { LoginData, RegisterAdminData, RegisterData } from "../../types";

const login = async (data: LoginData) => {
  const res = await axios.post(USER_URL + "login", data);

  return res.data;
};

const registerAdmin = async (data: RegisterAdminData) => {
  const res = await axios.post(USER_URL + "admin", data);
  return res.data;
};

const register = async (data: RegisterData) => {
  const res = await axios.post(USER_URL + "register", data);
  return res.data;
};

const getUser = async () => {
  const res = await axios.get(USER_URL + "me");

  return res.data;
};

const logout = async () => {
  const res = await axios.get(USER_URL + "logout");

  return res.data;
};

const familyCheck = async (verificationKey: string) => {
  const res = await axios.get(FAMILY_URL + "verification/" + verificationKey);

  return res.data;
};
const authServices = {
  login,
  familyCheck,
  register,
  getUser,
  logout,
  registerAdmin,
};
export default authServices;
