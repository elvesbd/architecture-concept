import FindAllController from "./adapters/controllers/User/FindAllController";
import LoginController from "./adapters/controllers/User/LoginController";
import RegisterController from "./adapters/controllers/User/RegisterController";
import app from "./external/api/config";
import JWT from "./external/cryptography/JWT";

const jwt = new JWT(process.env.JWT_SECRET_KEY!);
new LoginController(app, jwt);
new RegisterController(app);

// ------------------------------- Private Routes
new FindAllController(app);
