import { Express, Request, Response } from "express";
import CoreFacade from "../../facade/CoreFacade";
import Errors from "../../../errors/Errors";

export default class FindAllUserController {
  constructor(
    readonly server: Express,
    ...authMiddlewares: any[]
  ) {
    server.get(
      "/users",
      ...authMiddlewares,
      async (req: Request, res: Response) => {
        try {
          const users = await CoreFacade.user.get();
          res.status(200).json(users);
        } catch (error) {
          res.status(400).json({ errors: Errors.handleErrors(error) });
        }
      }
    );
  }
}
