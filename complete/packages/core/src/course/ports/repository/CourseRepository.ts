import Course from "../../model/Course"

export default interface CourseRepository {
  getById(id: string): Promise<Course | null>
  getAll(): Promise<Course[]>
  save(user: Course): Promise<void>
}
