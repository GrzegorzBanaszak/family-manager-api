import axios from "axios";
axios.defaults.withCredentials = true;

const BACKEND_URL = "https://family-manager-backend.herokuapp.com";

const FAMILY_URL: string = `${BACKEND_URL}/api/family/`;
const TRANSACTION_URL: string = `${BACKEND_URL}/api/transaction/`;
const USER_URL: string = `${BACKEND_URL}/api/user/`;
export { FAMILY_URL, TRANSACTION_URL, USER_URL };
export default axios;
