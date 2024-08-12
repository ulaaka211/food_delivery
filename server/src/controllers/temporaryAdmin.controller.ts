import { RequestHandler } from "express";
import jwt = require("jsonwebtoken");
import { TemporaryAdminModel } from "../models/temporaryAdmin";

export const temporaryAdmin: RequestHandler = async (req, res) => {
  try {
    const role = "temporaryAdmin";

    const temporaryToken = jwt.sign({ role }, "temporaryAdmin-key", {
      expiresIn: "10m",
    });

    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    const temporaryAdminModel = new TemporaryAdminModel({
      temporaryToken,
      role,
      expiresAt,
    });
    await temporaryAdminModel.save();

    res.json({ temporaryToken, role });
  } catch (error) {
    res.json(error);
  }
};

setInterval(async () => {
  try {
    await TemporaryAdminModel.deleteMany({ expiresAt: { $lt: new Date() } });
  } catch (error) {
    console.error("aldaa", error);
  }
}, 5 * 60 * 1000);
