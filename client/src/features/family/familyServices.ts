import qs from "qs";
import axios, { FAMILY_URL, TRANSACTION_URL } from "../../axiosConfig";
import { AddMoneyDate, TransactionData } from "../../types";

const getFamily = async () => {
  const family = await axios.get(FAMILY_URL);
  return family.data;
};

const getFamiles = async () => {
  const family = await axios.get(FAMILY_URL + "all");
  return family.data;
};

const addTransaction = async (data: TransactionData) => {
  const res = await axios({
    method: "post",
    url: TRANSACTION_URL,
    data: qs.stringify(data),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return res.data;
};

const addMoney = async (data: AddMoneyDate) => {
  const res = await axios({
    method: "post",
    url: TRANSACTION_URL + "add",
    data: qs.stringify(data),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return res.data;
};

const familyServices = { getFamily, addTransaction, getFamiles, addMoney };
export default familyServices;
