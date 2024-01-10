import bcrypt from "bcrypt";
import { Cryptography } from "core";

export default class Bcrypt implements Cryptography {
  encrypt(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  compare(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}
