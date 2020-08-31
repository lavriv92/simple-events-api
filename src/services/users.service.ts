import UsersRepository from "../repositories/users.repository";
import Service from "../shared/decorators/service";

@Service()
export default class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async getAllUsers(): Promise<any> {
    const users = await this.usersRepository.findAll({}, { password: 0, __v: 0 });

    return users;
  }

  public persist(params: any): Promise<any> {
    return this.usersRepository.persist(params);
  }
}