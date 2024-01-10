import { PrismaClient } from "@prisma/client"
import Course from "../../../../../../core/course/model/Course"
import CourseRepository from "../../../../../../core/course/ports/repository/CourseRepository"

export default class CoursePrismaRepository implements CourseRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async getById(id: string): Promise<Course | null> {
    const course = await this.prisma.course.findUnique({ where: { id } })
    return course ? new Course(course) : null
  }

  async getAll(): Promise<Course[]> {
    const courses = await this.prisma.course.findMany()
    return courses.map((course) => new Course(course))
  }

  async save(course: Course): Promise<void> {
    await this.prisma.course.upsert({
      where: { id: course.id.value ?? -1 },
      update: course.props,
      create: course.props,
    })
  }
}
