export default class Name {
  constructor(readonly value: string, min: number = 3, max: number = 120) {
    if (min > max)
      throw new Error(
        "The minimum name length cannot be greater than the maximum!"
      )

    if (!value) throw new Error("The name cannot be empty!")

    if (value.length < min || value.length > max)
      throw new Error(`The name must be between ${min} and ${max} characters!`)
  }
}
