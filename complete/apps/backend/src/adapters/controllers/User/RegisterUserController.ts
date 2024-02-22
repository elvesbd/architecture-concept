import { Express, Request, Response } from "express";
import CoreFacade from "../../facade/CoreFacade";

export default class RegisterUserController {
  constructor(readonly server: Express) {
    server.post("/register", async (req: Request, res: Response) => {
      try {
        const { name, email, password } = req.body;
        await CoreFacade.user.register({ name, email, password });
        res.status(201).json({});
      } catch (error) {
        res
          .status(500)
          .json({ message: "Não foi possível registrar o usuário" });
      }
    });
  }
}
