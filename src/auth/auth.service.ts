import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../domain/users/users.service';

@Injectable()
export class AuthService {
  constructor (private readonly usersService: UsersService, private jwtService: JwtService) {}

  async validateUsername(username: string) {
    const user = await this.usersService.findByUsername(username);
    if (user) {
      const payload = { username: user.username };
      return this.jwtService.sign(payload);
    }
    return null;
  }
}
