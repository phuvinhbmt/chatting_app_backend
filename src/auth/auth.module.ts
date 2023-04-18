import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from '../domain/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [],
  providers: [AuthService, AuthResolver],
  imports: [
    // ConfigModule.forRoot(),
    UsersModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.SECRET_KEY ,
        signOptions: { expiresIn: '60s'}
      })
    }),
  ]
})
export class AuthModule {}
