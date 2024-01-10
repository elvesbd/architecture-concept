import Terminal from "../util/Terminal"
import CoursePrismaRepository from "../../adapters/db/prisma/repositories/course/CoursePrismaRepository"
import GetCourses from "../../../core/course/services/GetCourses"

export default async function getCourses() {
  Terminal.title("Obter Cursos")

  try {
    const repository = new CoursePrismaRepository()
    const useCase = new GetCourses(repository)
    const courses = await useCase.execute()

    Terminal.table(courses.map((user) => user.props))
  } catch (error: any) {
    Terminal.error(error)
  } finally {
    await Terminal.waitEnter()
  }
}
