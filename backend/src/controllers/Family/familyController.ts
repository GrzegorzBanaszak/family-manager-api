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

// @desc   - Pobranie rodziny po kluczu rodziny
// @route  - Post /api/family/verification
// @access - Public
const verificationFamily = asyncHandelr(async (req, res) => {
  const family = await Family.findOne({
    verificationKey: req.params.verificationKey,
  });

  if (!family) {
    res.status(400);
    throw new Error("Nie znaleziono rodziny");
  }

  res.status(200).json({ id: family._id, name: family.name });
});

export { getFamily, verificationFamily };
