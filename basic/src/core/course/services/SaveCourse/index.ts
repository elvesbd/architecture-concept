import Course from "../../model/Course"
import UseCase from "../../../shared/interfaces/UseCase"
import CourseRepository from "../../ports/repository/CourseRepository"

export default class SaveCourse implements UseCase<Course, void> {
  constructor(private readonly repository: CourseRepository) {}

  async execute(input: Course): Promise<void> {
    return this.repository.save(input)
  }
}
