import axios from "axios";
axios.defaults.withCredentials = true;

const FAMILY_URL: string = "http://localhost:5000/api/family/";

export { FAMILY_URL };
export default axios;
