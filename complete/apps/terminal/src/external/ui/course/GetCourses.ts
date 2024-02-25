import Backend from "../util/Backend";
import Terminal from "../util/Terminal";

export default async function getCourses() {
  Terminal.title("Obter Cursos");

  try {
    const courses = await Backend.get("courses");
    Terminal.table(courses);
  } catch (error: any) {
    Terminal.error(error);
  } finally {
    await Terminal.waitEnter();
  }
}
