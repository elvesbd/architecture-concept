import Terminal from "../util/Terminal";
import CoreFacade from "../../adapters/facade/CoreFacade";

export default async function registerUser() {
  Terminal.title("Registrar Usuário");

  try {
    const name = await Terminal.requiredFields("Nome", { default: "John Doe" });
    const email = await Terminal.requiredFields("Email", {
      default: "john@mail.com",
    });
    const password = await Terminal.requiredFields("Password", {
      echo: false,
      default: "#Senha123",
    });

    await CoreFacade.user.register({ name, email, password });
    Terminal.success(`User successfully registered!`);
  } catch (error: any) {
    Terminal.error(error);
  } finally {
    await Terminal.waitEnter();
  }
}
