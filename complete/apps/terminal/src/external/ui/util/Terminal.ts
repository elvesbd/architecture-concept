import { terminal } from "terminal-kit"
import { InputFieldOptions } from "terminal-kit/Terminal"

export default class Terminal {
  static title(text: string) {
    terminal.clear()
    terminal.bold.magenta(`${text}\n`)
    terminal.bold.magenta("-".repeat(text.length))
  }

  static async menu(
    title: string,
    options: string[]
  ): Promise<[number, string]> {
    Terminal.title(title)
    const { selectedIndex, selectedText } = await terminal.singleColumnMenu(
      options
    ).promise
    return [selectedIndex, selectedText]
  }

  static async requiredFields(
    label: string,
    options?: InputFieldOptions
  ): Promise<string> {
    terminal.gray(`\n${label}: `)

    const value = await terminal.inputField(options).promise
    if (value?.trim) return value

    return Terminal.requiredFields(label, options)
  }

  static async waitEnter() {
    terminal.white("\nPressione ENTER para continuar...")
    await terminal.inputField({ echo: false }).promise
  }

  static async success(msg: string, newLine = true) {
    terminal.green(`${newLine ? "\n" : ""}${msg}`)
  }

  static async error(msg: string, newLine = true) {
    terminal.red(`${newLine ? "\n" : ""}${msg}`)
  }

  static async table(data: any[]) {
    terminal("\n")
    terminal.table([
      Object.keys(data[0]),
      ...data.map((d) => Object.values(d) as any),
    ])
  }
}
