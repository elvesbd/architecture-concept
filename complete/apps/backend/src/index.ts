import FindAllUserController from "./adapters/controllers/User/FindAllUserController";
import LoginUserController from "./adapters/controllers/User/LoginUserController";
import RegisterUserController from "./adapters/controllers/User/RegisterUserController";
import UserMiddleware from "./adapters/middlewares/user/UserMiddleware";
import app from "./external/api/config";
import JWT from "./external/cryptography/JWT";
import UserPrismaRepository from "./external/db/prisma/repositories/user/UserPrismaRepository";

const userRepository = new UserPrismaRepository();
const jwt = new JWT(process.env.JWT_SECRET_KEY!);
new LoginUserController(app, jwt);
new RegisterUserController(app);

// ------------------------------- Private Routes
const userMiddleware = UserMiddleware(userRepository, jwt);
new FindAllUserController(app, userMiddleware);
