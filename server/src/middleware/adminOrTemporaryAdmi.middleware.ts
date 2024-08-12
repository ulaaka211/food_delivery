import { RequestHandler } from "express";
import { adminMiddleware } from "./admin.middleware";
import { temporaryAdminMiddleware } from "./temporayAdmin.middleware";

export const eitherAdminOrTemporaryAdmin: RequestHandler = async (
  req,
  res,
  next
) => {
  adminMiddleware(req, res, (err) => {
    if (!err) {
      return next();
    }

    temporaryAdminMiddleware(req, res, (err) => {
      if (!err) {
        return next();
      }

      return res.status(403).json({
        message: "Access denied. Admin or TemporaryAdmin role required.",
      });
    });
  });
};
