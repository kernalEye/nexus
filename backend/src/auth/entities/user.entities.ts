import {
  Field,
  Int,
  ObjectType,
} from '@nestjs/graphql';

@ObjectType()
export class UserEntity {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
}