import Session from "./Session";

export default class Backend {
  static async get(url: string) {
    const baseUrl = process.env.API_URL;
    const token = Session.token;
    const response = await fetch(`${baseUrl}/${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    return await response.json();
  }

  static async post(url: string, data: any) {
    const baseUrl = process.env.API_URL;
    const token = Session.token;
    const response = await fetch(`${baseUrl}/${url}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    return await response.json();
  }
}
