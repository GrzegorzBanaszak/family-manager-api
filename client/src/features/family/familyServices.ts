import axios, { FAMILY_URL, TRANSACTION_URL } from "../../axiosConfig";
import { TransactionData } from "../../types";

const getFamily = async () => {
  const family = await axios.get(FAMILY_URL);
  return family.data;
};

const addTransaction = async (data: TransactionData) => {
  const res = await axios.post(TRANSACTION_URL, data);
  return res.data;
};

const familyServices = { getFamily, addTransaction };
export default familyServices;
