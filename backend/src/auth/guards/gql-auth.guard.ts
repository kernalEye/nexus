import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    console.log(':ctx::>>>>', context);
    const ctx = GqlExecutionContext.create(context);
    console.log(':ctx::>>>>', ctx);
    return ctx.getContext().req;
  }
}
