import Terminal from "../util/Terminal";
import CoreFacade from "../../adapters/facade/CoreFacade";

export default async function getUsers() {
  Terminal.title("Obter Usuários");

  try {
    const users = await CoreFacade.user.get();
    Terminal.table(users);
  } catch (error: any) {
    Terminal.error(error);
  } finally {
    await Terminal.waitEnter();
  }
}
