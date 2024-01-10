import login from "../user/Login";
import Session from "../util/Session";
import getUsers from "../user/GetUsers";
import Terminal from "../util/Terminal";
import saveCourse from "../course/SaveCourse";
import getCourses from "../course/GetCourses";
import registerUser from "../user/RegisterUser";

export default class PrincipalMenu {
  async render() {
    const user = Session.user;

    const [_, text] = await Terminal.menu(
      `Menu Principal - ${user ? user.email : ""}`,
      user
        ? ["Obter Usuários", "Salvar Curso", "Obter Cursos", "Logout"]
        : ["Registrar Usuário", "Login", "Exit"]
    );

    switch (text) {
      case "Login":
        await login();
        break;
      case "Obter Usuários":
        await getUsers();
        break;
      case "Registrar Usuário":
        await registerUser();
        break;
      case "Salvar Curso":
        await saveCourse();
        break;
      case "Obter Cursos":
        await getCourses();
        break;
      case "Logout":
        Session.finished();
        break;
      case "Exit":
        process.exit(0);
    }

    await this.render();
  }
}
