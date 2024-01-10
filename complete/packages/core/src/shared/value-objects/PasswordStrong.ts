export default class PasswordStrong {
  constructor(readonly value: string) {
    console.log("PasswordStrong", value)

    if (!value) throw new Error("Password cannot be empty")
    if (value.length < 8)
      throw new Error("The password must be at least 8 characters long")
    if (!value.match(/[a-z]/))
      throw new Error(
        "The password must contain at least one letter lower case"
      )
    if (!value.match(/[A-Z]/))
      throw new Error(
        "The password must contain at least one letter upper case"
      )
    if (!value.match(/[0-9]/))
      throw new Error("The password must contain at least one number")
    if (!value.match(/[^a-zA-Z0-9]/))
      throw new Error("The password must have at least one special character")
  }
}
