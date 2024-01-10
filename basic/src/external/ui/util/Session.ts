import User from "../../../core/user/model/User";

export default class Session {
  private static _user: User | null

  static started(user: User) {
    this._user = user
  }

  static finished() {
    this._user = null
  }

  static get user() {
    return this._user
  }
}