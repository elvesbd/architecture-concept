import { CourseDTO } from "../../dto/course/CourseDTO";
import { Course, CourseRepository, GetCourses, SaveCourse } from "core";

export default class CourseFacade {
  constructor(private readonly repository?: CourseRepository) {}

  async get(): Promise<CourseDTO[]> {
    const getCourses = new GetCourses(this.repository!);
    const courses = await getCourses.execute();
    return courses.map((course) => ({
      ...course.props,
      formattedPrice: course.price.formatPrice(),
    }));
  }

  async save(courseDTO: CourseDTO): Promise<void> {
    const saveCourse = new SaveCourse(this.repository!);
    const course = new Course(courseDTO);
    await saveCourse.execute(course);
  }
}
