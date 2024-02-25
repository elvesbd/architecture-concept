import Backend from "../util/Backend";
import Terminal from "../util/Terminal";

export default async function getUsers() {
  Terminal.title("Obter Usuários");

  try {
    const users = await Backend.get("users");
    Terminal.table(users);
  } catch (error: any) {
    Terminal.error(error);
  } finally {
    await Terminal.waitEnter();
  }
}
