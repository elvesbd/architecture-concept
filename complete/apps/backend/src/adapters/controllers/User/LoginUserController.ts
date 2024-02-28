import { Express, Request, Response } from "express";
import CoreFacade from "../../facade/CoreFacade";
import JWT from "../../../external/cryptography/JWT";
import Errors from "../../../errors/Errors";

export default class LoginUserController {
  constructor(
    readonly server: Express,
    readonly jwt: JWT
  ) {
    server.post("/login", async (req: Request, res: Response) => {
      try {
        const { email, password } = req.body;
        const user = await CoreFacade.user.login({ email, password });
        const token = jwt.generate({
          id: user.id,
          name: user.name,
          email: user.email,
        });
        res.status(200).json(token);
      } catch (error) {
        res.status(400).json({ errors: Errors.handleErrors(error) });
      }
    });
  }
}
