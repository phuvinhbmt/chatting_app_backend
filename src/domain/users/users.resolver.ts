import { UsersService } from './users.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.schema';

@Resolver('User')
export class UsersResolver {
  constructor (private readonly usersService: UsersService) {}

  @Query(returns => User)
  async getUser (@Args('id') id: string) {
    return await this.usersService.findOne(id);
  }

  @Query(returns => User)
  async getUserByUsername(@Args('username') username: string) {
    return await this.usersService.findByUsername(username);
  }

  @Query(returns => [User])
  async getUsers () {
    return await this.usersService.findAll();
  }
}
