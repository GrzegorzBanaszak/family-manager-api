import axios, { FAMILY_URL } from "../../axiosConfig";

const getFamily = async () => {
  const family = await axios.get(FAMILY_URL);
  return family.data;
};

const familyServices = { getFamily };
export default familyServices;
