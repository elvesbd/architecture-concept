export default interface Cryptography {
  encrypt(password: string): string
  compare(password: string, hash: string): boolean
}
