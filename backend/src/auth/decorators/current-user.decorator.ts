import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    // console.log('ctxctxi dont knwo about this::>>', ctx);
    console.log("ctx.getContext()",ctx.getContext().req)
    return ctx.getContext().req.user;
  },
);
