import Course, { CourseProps } from "./model/Course";
import GetCourses from "./services/GetCourses";
import SaveCourse from "./services/SaveCourse";
import CourseRepository from "./ports/repository/CourseRepository";

export type { CourseRepository, CourseProps };

export { Course, GetCourses, SaveCourse };
