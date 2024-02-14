import { JwtPayload, sign, verify } from "jsonwebtoken";

export default class JWT {
  constructor(private readonly secretKey: string) {}

  generate(payload: string | object): string {
    return sign(payload, this.secretKey, { expiresIn: "1d" });
  }

  validate(token: string): string | JwtPayload {
    return verify(token, this.secretKey);
  }
}
