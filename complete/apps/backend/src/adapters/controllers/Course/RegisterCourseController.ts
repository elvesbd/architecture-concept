import { Express, Request, Response } from "express";
import CoreFacade from "../../facade/CoreFacade";
import Errors from "../../../errors/Errors";

export default class RegisterCourseController {
  constructor(
    readonly server: Express,
    ...authMiddlewares: any[]
  ) {
    server.post(
      "/courses",
      ...authMiddlewares,
      async (req: Request, res: Response) => {
        try {
          const { name, price } = req.body;
          await CoreFacade.course.save({ name, price: +price });
          res.status(201).json({});
        } catch (error) {
          res.status(400).json({ errors: Errors.handleErrors(error) });
        }
      }
    );
  }
}
