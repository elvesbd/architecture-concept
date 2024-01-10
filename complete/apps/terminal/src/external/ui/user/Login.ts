import Session from "../util/Session";
import Terminal from "../util/Terminal";
import CoreFacade from '../../adapters/facade/CoreFacade';

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

    const user = await CoreFacade.user.login({ email, password });
    Session.started(user);
  } catch (error: any) {
    Terminal.error(error);
  }
}
