import { Express, Request, Response } from "express";
import CoreFacade from "../../facade/CoreFacade";

export default class FindAllController {
  constructor(readonly server: Express) {
    server.get("/users", async (req: Request, res: Response) => {
      const users = await CoreFacade.user.get();
      res.status(200).json(users);
    });
  }
}
