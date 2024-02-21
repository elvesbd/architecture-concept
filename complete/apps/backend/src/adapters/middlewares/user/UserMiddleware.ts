import { UserRepository } from "core";
import { NextFunction, Request, Response } from "express";
import JWT from "../../../external/cryptography/JWT";
import { UserResponseDTO } from "adapters";

export default function UserMiddleware(
  userRepository: UserRepository,
  jwt: JWT
) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const deniedAccess = () =>
      res.status(403).json({
        message: "Acesso negado!",
      });

    try {
      const token = req.headers.authorization?.replace("Bearer ", "");
      if (!token) return deniedAccess();

      const userToken = jwt.validate(token) as UserResponseDTO;

      const user = await userRepository.getByEmail(userToken.email);
      if (!user) return deniedAccess();

      (req as any).user = user;
      next();
    } catch (error) {
      deniedAccess();
    }
  };
}
