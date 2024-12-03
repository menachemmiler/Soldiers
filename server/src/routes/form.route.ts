import { Request, Response } from "express";
import { formService } from "../services/formService";
import { IMilitaryForm } from "../models/militaryFormSchema";

export const form = async (
  req: Request<any, any, IMilitaryForm>,
  res: Response
) => {
  try {
    const result = await formService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json((error as Error).message);
  }
};
