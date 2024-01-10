import Terminal from "../util/Terminal"
import SaveCourse from "../../../core/course/services/SaveCourse"
import CoursePrismaRepository from "../../adapters/db/prisma/repositories/course/CoursePrismaRepository"
import Course from "../../../core/course/model/Course"

export default async function saveCourse() {
  Terminal.title("Salvar Curso")

  try {
    const name = await Terminal.requiredFields("Nome")
    const price = await Terminal.requiredFields("Preço")

    const course = new Course({ name, price: +price })
    const repository = new CoursePrismaRepository()
    const useCase = new SaveCourse(repository)
    await useCase.execute(course)

    Terminal.success(`Course successfully save!`)
  } catch (error: any) {
    Terminal.error(error)
  } finally {
    await Terminal.waitEnter()
  }
}
