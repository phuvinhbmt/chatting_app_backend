import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { type HydratedDocument } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

export type UserDocument = HydratedDocument<User>;
@ObjectType()
@Schema()
export class User {
  @Field()
    _id: string;

  @Field()
  @Prop({ required: true })
  username: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
