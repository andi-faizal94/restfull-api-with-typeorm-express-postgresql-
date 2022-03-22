import { Response, Request, NextFunction } from "express";
import { User } from "../entity/User";

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const user = User.find();
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
