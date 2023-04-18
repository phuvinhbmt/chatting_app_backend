import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor (@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async create (createUserDto: any): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findAll (): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne (id: string): Promise<User> {
    return await this.userModel.findById({ _id: id }).exec();
  }

  async findByUsername(username: string): Promise<User> {
    return await this.userModel.findOne({ username }).exec();
  }
}
