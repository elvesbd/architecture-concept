import Terminal from "../util/Terminal";

export default async function getCourses() {
  Terminal.title("Obter Cursos");

  try {
    /*  const courses = await CoreFacade.course.get();
    Terminal.table(courses); */
  } catch (error: any) {
    Terminal.error(error);
  } finally {
    await Terminal.waitEnter();
  }
}
