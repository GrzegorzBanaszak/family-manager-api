import axios from "axios";
axios.defaults.withCredentials = true;

const FAMILY_URL: string = "http://localhost:5000/api/family/";
const TRANSACTION_URL: string = "http://localhost:5000/api/transaction/";
export { FAMILY_URL, TRANSACTION_URL };
export default axios;
