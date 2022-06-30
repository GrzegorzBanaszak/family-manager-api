import asyncHandler from "express-async-handler";
import Transaction from "../../models/transactionModel";
import Family from "../../models/familyModel";
import { Request, Response } from "express";
import { TransactionTypesEnum } from "../../Enums/TransactionTypesEnum";
import { RoleEnum } from "../../Enums/RoleEnum";
const addTransaction = asyncHandler(async (req: Request, res: Response) => {
  const { amount } = req.body;
  const { firstName, lastName, memberOfFamily } = req.user;

  if (!amount) {
    res.status(400);
    throw new Error("Nie wszystkie pola zostaly wypelnione");
  }

  const family = await Family.findById(memberOfFamily);

  if (amount > family?.cash!) {
    res.status(400);
    throw new Error("Nie masz wystarczajacoj liczby gotowki");
  }

  const transaction = await Transaction.create({
    user: `${firstName} ${lastName}`,
    amount,
    transactionType: TransactionTypesEnum.MINUS,
  });

  if (!transaction) {
    res.status(400);
    throw new Error("Nie udało sie wykonąć transakcji");
  }

  const result = await family?.updateOne({
    $push: { transactions: [transaction._id] },
    $inc: { cash: -amount },
  });

  if (result.modifiedCount === 0) {
    res.status(400);
    throw new Error("Nie udalo sie dodac transakcji do rodziny");
  }

  res.status(201).json(transaction);
});

const addAmount = asyncHandler(async (req: Request, res: Response) => {
  const { amount, familyId } = req.body;

  if (!amount || !familyId) {
    res.status(400);
    throw new Error("Nie wszystkie pola zostaly wypelnione");
  }

  if (req.user.role !== RoleEnum.admin) {
    res.status(401);
    throw new Error("Nie posiadzacz odpowidnich uprawnien");
  }

  const family = await Family.findByIdAndUpdate(
    familyId,
    {
      $inc: { cash: +amount },
    },
    { new: true }
  );

  if (!family) {
    res.status(400);
    throw new Error("Nie znaleziono rodziny");
  }

  res.status(201).json(family);
});

export { addTransaction, addAmount };
