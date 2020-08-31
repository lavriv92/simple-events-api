import User from '../models/user';

import BaseRepository from './base.repository';

export default class UsersRepository extends BaseRepository {
  protected readonly model = User
}