import { UserRepository } from "core";
import { NextFunction, Request, Response } from "express";
import JWT from "../../../external/cryptography/JWT";
import { UserResponseDTO } from "adapters";

export default function AuthMiddleware(
  userRepository: UserRepository,
  jwt: JWT
) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const unauthorized = () =>
      res.status(401).json({
        message: "Unauthorized!",
      });

    try {
      const token = req.headers.authorization?.replace("Bearer ", "");
      if (!token) return unauthorized();

      const userToken = jwt.validate(token) as UserResponseDTO;

      const user = await userRepository.getByEmail(userToken.email);
      if (!user) return unauthorized();

      (req as any).user = user;
      next();
    } catch (error) {
      unauthorized();
    }
  };
}
