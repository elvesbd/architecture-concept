import Name from "./Name";

export default class UserName extends Name {
  constructor(value: string, min: number = 3, max: number = 120) {
    super(value, min, max);

    if (value.split(" ").length < 2)
      throw new Error("The name must have at least one surname!");
  }

  get firstName(): string {
    return this.value.split(" ")[0]!;
  }

  get middleName(): string {
    return this.value.split(" ")[1]!;
  }

  get lastName(): string {
    return this.value.split(" ")[this.value.split(" ").length - 1]!;
  }
}
