import {
  RegisterUser,
  UserRepository,
  Cryptography,
  Login,
  GetUsers,
} from "core";
import { LoginDTO, RegisterDTO, UserResponseDTO } from "../../dto";

export default class UserFacade {
  constructor(
    private readonly repository?: UserRepository,
    private readonly cryptography?: Cryptography
  ) {}

  async get(): Promise<UserResponseDTO[]> {
    const getUsers = new GetUsers(this.repository!);
    const users = await getUsers.execute();
    return users.map((user) => user.props);
  }

  async register(registerDTO: RegisterDTO): Promise<void> {
    const registerUser = new RegisterUser(this.cryptography!, this.repository!);
    await registerUser.execute(registerDTO);
  }

  async login(loginDto: LoginDTO): Promise<UserResponseDTO> {
    const loginUser = new Login(this.repository!, this.cryptography!);
    const user = await loginUser.execute({
      email: loginDto.email,
      password: loginDto.password,
    });
    return user.props;
  }
}
