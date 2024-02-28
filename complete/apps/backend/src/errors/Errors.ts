export default class Errors {
  static handleErrors(error: any): any[] {
    if (error instanceof Array) return error;
    if (error instanceof Error) {
      return [
        {
          code: "unknown",
          message: error.message,
        },
      ];
    }
    return [
      {
        code: "unknown",
      },
    ];
  }
}
