import { Express, Request, Response } from "express";
import CoreFacade from "../../facade/CoreFacade";

export default class FindAllUserController {
  constructor(
    readonly server: Express,
    ...userMiddlewares: any[]
  ) {
    server.get(
      "/users",
      ...userMiddlewares,
      async (req: Request, res: Response) => {
        const users = await CoreFacade.user.get();
        res.status(200).json(users);
      }
    );
  }
}
