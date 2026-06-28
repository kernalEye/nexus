import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { RegisterInput } from './dto/register.input';
import { LoginInput } from './dto/login.input';
import { AuthResponse } from './dto/auth-response.dto';
import { UseGuards } from '@nestjs/common';

import { GqlAuthGuard } from './guards/gql-auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { UserEntity } from './entities/user.entities';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => String)
  health(): string {
    return 'API is running';
  }

  @Mutation(() => AuthResponse)
  register(@Args('input') input: RegisterInput) {
    return this.authService.register(input.name, input.email, input.password);
  }
  @Mutation(() => AuthResponse)
  login(
    @Args('input')
    input: LoginInput,
  ): Promise<AuthResponse> {
    return this.authService.login(input.email, input.password);
  }
  @Query(() => UserEntity)
  @UseGuards(GqlAuthGuard)
  me(@CurrentUser() user: any) {
    console.log('user::>>', user);
    return this.authService.me(user.sub);
  }
}
