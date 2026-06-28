import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { RegisterInput } from './dto/register.input';
import { LoginInput } from './dto/login.input';
import { AuthResponse } from './dto/auth-response.dto';
import { UseGuards } from '@nestjs/common';

import { GqlAuthGuard } from './guards/gql-auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { UserEntity } from './entities/user.entities';
import { RefreshResponse } from './dto/refresh-response.dto';
import { RefreshTokenInput } from './dto/refresh-token.input';
import { LogoutInput } from './dto/logout.input';

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
    return this.authService.me(user.sub);
  }
  @Mutation(() => RefreshResponse)
  refresh(
    @Args('input')
    input: RefreshTokenInput,
  ) {
    return this.authService.refresh(input.refreshToken);
  }
  @Mutation(() => AuthResponse)
  logout(
    @Args('input')
    input: LogoutInput,
  ) {
    return this.authService.logout(input.refreshToken);
  }
}
