import { AuthService } from './auth.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import {SignInUserResponse} from './dto/auth.dto';


@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {};

  @Query(returns => SignInUserResponse)
  async signInUser(@Args('username') username: string) {
    const token = await this.authService.validateUsername(username);
    if (token) {
      const response: SignInUserResponse = {token};
      return response;
    }
  }
}
