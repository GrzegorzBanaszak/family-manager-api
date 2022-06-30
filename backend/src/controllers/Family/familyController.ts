import asyncHandelr from "express-async-handler";
import Family from "../../models/familyModel";

const getFamily = asyncHandelr(async (req, res) => {
  const family = await Family.findById(req.user.memberOfFamily)
    .populate("familyMembers", "_id firstName lastName email")
    .populate("transactions", "_id user amount transactionType");

  if (!family) {
    res.status(400);
    throw new Error("Nie znaleziono rodziny");
  }

  res.status(200).json(family);
});

export { getFamily };
