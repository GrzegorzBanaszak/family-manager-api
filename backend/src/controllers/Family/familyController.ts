import asyncHandelr from "express-async-handler";
import Family from "../../models/familyModel";
import User from "../../models/userModel";

const getFamily = asyncHandelr(async (req, res) => {
  const family = await Family.findById(req.user.memberOfFamily).populate(
    "familyMembers",
    "_id firstName lastName email"
  );

  if (!family) {
    res.status(400);
    throw new Error("Nie znaleziono rodziny");
  }

  res.status(200).json(family);
});

export { getFamily };
