import Course from "../../model/Course"
import UseCase from "../../../shared/interfaces/UseCase"
import CourseRepository from "../../ports/repository/CourseRepository"

export default class GetCourses implements UseCase<void, Course[]> {
  constructor(private readonly repository: CourseRepository) {}

  async execute(): Promise<Course[]> {
    return await this.repository.getAll()
  }
}
