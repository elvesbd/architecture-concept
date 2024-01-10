export default class Email {
  constructor(readonly value: string) {
    if (!value) throw new Error("Email cannot be empty!");

    if (!value.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i))
      throw new Error("Email must be valid!");
  }

  get user(): string {
    return this.value.split("@")[0]!;
  }

  get domain(): string {
    return this.value.split("@")[1]!;
  }
}
