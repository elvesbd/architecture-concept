import LoginController from "./adapters/controllers/User/LoginController";
import app from "./external/api/config";
import JWT from "./external/cryptography/JWT";

const jwt = new JWT(process.env.JWT_SECRET_KEY!);
new LoginController(app, jwt);
