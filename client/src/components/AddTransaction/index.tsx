import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { TransactionData } from "../../types";
import {
  Button,
  Title,
  TransactionError,
  TransactionForm,
} from "./addTransaction.components";
import { addTransaction, reset } from "../../features/family/familySlice";
import { setDashboardUserLocation } from "../../features/dashboard/dashboardSlice";
const AddTransaction = () => {
  const { transactionError, transactionSuccess, message } = useAppSelector(
    (state) => state.family
  );
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<TransactionData>({
    name: "",
    amount: 0,
  });

  useEffect(() => {
    if (transactionSuccess) {
      dispatch(reset());
      dispatch(setDashboardUserLocation("transactions"));
    }
  }, [transactionSuccess]);

  const handleChangeOnlyNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^[0-9]*$/)) {
      setFormData((prev) => ({ ...prev, amount: Number(e.target.value) }));
    }
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name.length > 0 && formData.amount > 0) {
      dispatch(addTransaction(formData));
    }
  };

  return (
    <>
      <Title>Dodaj nową transakcje</Title>
      <TransactionForm onSubmit={formSubmit}>
        <label>Nazwa</label>
        <input
          name="name"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          type="text"
        />
        <label>Kwota</label>
        <input
          name="amount"
          value={formData.amount}
          onChange={handleChangeOnlyNumber}
          type="text"
        />
        {transactionError && <TransactionError>{message}</TransactionError>}
        <Button type="submit">Dodaj</Button>
      </TransactionForm>
    </>
  );
};

export default AddTransaction;
