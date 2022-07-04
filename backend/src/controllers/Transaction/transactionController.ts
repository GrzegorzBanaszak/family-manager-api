import asyncHandler from "express-async-handler";
import Transaction from "../../models/transactionModel";
import Family from "../../models/familyModel";
import { Request, Response } from "express";
import { TransactionTypesEnum, RoleEnum } from "../../enums";

// @desc   - Dodawanie transakcji przez uzytkownika
// @route  - POST /api/transaction/
// @access - Private
const addTransaction = asyncHandler(async (req: Request, res: Response) => {
  const { amount, name } = req.body;
  const { firstName, lastName, memberOfFamily } = req.user;

  if (!amount || !name) {
    res.status(400);
    throw new Error("Nie wszystkie pola zostaly wypelnione");
  }

  if (amount === 0) {
    res.status(400);
    throw new Error("Nie można dokonać transakcji za 0");
  }

  const family = await Family.findById(memberOfFamily);

  if (!family) {
    res.status(400);
    throw new Error("Nie ma takiej rodziny");
  }

  if (amount > family?.cash!) {
    res.status(400);
    throw new Error("Nie masz wystarczajacoj liczby gotowki");
  }

  const transaction = await Transaction.create({
    user: `${firstName} ${lastName}`,
    name,
    amount,
    transactionType: TransactionTypesEnum.MINUS,
  });

  if (!transaction) {
    res.status(400);
    throw new Error("Nie udało sie wykonąć transakcji");
  }

  const updatedFamily = await Family.findByIdAndUpdate(
    memberOfFamily,
    {
      $push: { transactions: [transaction._id] },
      $inc: { cash: -amount },
    },
    { new: true }
  ).populate("transactions", "_id name user amount transactionType createdAt");

  if (!updatedFamily) {
    res.status(400);
    throw new Error("Nie udało sie przypisać transakcji do rodziny");
  }

  res.status(201).json({
    transactions: updatedFamily.transactions,
    cash: updatedFamily.cash,
  });
});

// @desc   - Dodawanie funduszy rodzinie przez admina
// @route  - Get /api/transaction/add
// @access - Private

const addAmount = asyncHandler(async (req: Request, res: Response) => {
  const { amount, familyId, name } = req.body;
  const { firstName, lastName } = req.user;

  if (!amount || !name || !familyId) {
    res.status(400);
    throw new Error("Nie wszystkie pola zostaly wypelnione");
  }

  if (amount === 0) {
    res.status(400);
    throw new Error("Nie można dokonać transakcji za 0");
  }

  const familyExist = await Family.findById(familyId);

  if (!familyExist) {
    res.status(400);
    throw new Error("Nie ma takiej rodziny");
  }

  const transaction = await Transaction.create({
    user: `${firstName} ${lastName}`,
    name,
    amount,
    transactionType: TransactionTypesEnum.ADD,
  });

  if (!transaction) {
    res.status(400);
    throw new Error("Nie udało sie wykonąć transakcji");
  }

  const updatedFamily = await Family.findByIdAndUpdate(
    familyId,
    {
      $push: { transactions: [transaction._id] },
      $inc: { cash: +amount },
    },
    { new: true }
  ).populate("transactions", "_id name user amount transactionType createdAt");

  if (!updatedFamily) {
    res.status(400);
    throw new Error("Nie udało sie przypisać transakcji do rodziny");
  }

  res.status(201).json({
    transactions: updatedFamily.transactions,
    cash: updatedFamily.cash,
  });
});

export { addTransaction, addAmount };
