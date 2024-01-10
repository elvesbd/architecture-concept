export default class Price {
  constructor(readonly value: number, readonly attribute?: string) {
    if (!value) throw new Error(`${attribute ?? "price"} does not be empty`)

    if (value < 0) throw new Error(`${attribute ?? "price"} cannot be negative`)
  }

  formatPrice(type: string = "pt-BR", currency: string = "BRL"): string {
    return Intl.NumberFormat(type, {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(this.value)
  }
}
