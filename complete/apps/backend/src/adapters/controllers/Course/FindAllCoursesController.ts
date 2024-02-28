import { Express, Request, Response } from "express";
import CoreFacade from "../../facade/CoreFacade";
import Errors from "../../../errors/Errors";

export default class FindAllCoursesController {
  constructor(
    readonly server: Express,
    ...authMiddlewares: any[]
  ) {
    server.get(
      "/courses",
      ...authMiddlewares,
      async (req: Request, res: Response) => {
        try {
          const courses = await CoreFacade.course.get();
          res.status(200).json(courses);
        } catch (error) {
          res.status(400).json({ errors: Errors.handleErrors(error) });
        }
      }
    );
  }
}
