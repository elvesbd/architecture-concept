export default class PasswordHash {
  constructor(readonly hash: string) {
    if (!hash) throw new Error("Password cannot be empty!")

    const regex = /^\$2[ayb]\$[0-9]{2}\$[A-Za-z0-9\.\/]{53}$/
    if (!hash.match(regex))
      throw new Error("The password must have a valid hash")
  }
}
