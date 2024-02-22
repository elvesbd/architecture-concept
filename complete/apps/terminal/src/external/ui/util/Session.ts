import { decode } from "jsonwebtoken";
import { UserResponseDTO } from "adapters";

export default class Session {
  private static _token: string | null = null;

  static started(token: string) {
    this._token = token;
  }

  static finished() {
    this._token = null;
  }

  static get token() {
    return this._token;
  }

  static get user() {
    if (!this._token) return null;
    return decode(this._token) as UserResponseDTO;
  }
}
