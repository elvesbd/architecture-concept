import Backend from "../util/Backend";
import Session from "../util/Session";
import Terminal from "../util/Terminal";

export default async function login() {
  Terminal.title("Login");

  try {
    const email = await Terminal.requiredFields("Email", {
      default: "john@mail.com",
    });
    const password = await Terminal.requiredFields("Password", {
      echo: false,
      default: "#Senha123",
    });

    const token = await Backend.post("login", { email, password });
    Session.started(token);
  } catch (error: any) {
    Terminal.error(error);
  }
}
