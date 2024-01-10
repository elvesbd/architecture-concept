import { UserResponseDTO } from "adapters";

export default class Session {
  private static _user: UserResponseDTO | null = null;

  static started(user: UserResponseDTO) {
    this._user = user;
  }

  static finished() {
    this._user = null;
  }

  static get user() {
    return this._user;
  }
}
