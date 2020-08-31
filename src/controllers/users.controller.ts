import Controller from "../shared/decorators/controller";
import { Get, Post } from "../shared/decorators/actions";
import UsersService from "../services/users.service";

@Controller("/users")
export default class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Get()
  async getMessage(request) {
    const users = await this.usersService.getAllUsers();
    
    return { users };
  }

  @Post()
  async createUser(request) {
    const user = this.usersService.persist(request.payload);

    return user;
  }
}