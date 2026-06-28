import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { randomUUID } from 'crypto';
import { StringValue } from 'ms';
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(name: string, email: string, password: string) {
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const passwordHash = await bcrypt.hash(password, 10);

    await this.prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          name,
          email,
          passwordHash,
        },
      });

      const tenant = await tx.tenant.create({
        data: {
          name: `${name}'s Workspace`,
          createdBy: user.id,
        },
      });

      await tx.tenantUser.create({
        data: {
          userId: user.id,
          tenantId: tenant.id,
          role: 'OWNER',
        },
      });
    });

    return {
      success: true,
      message: 'Registration successful',
    };
  }

  async login(email: string, password: string) {
    const sessionId = randomUUID();
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const tenantUser = await this.prisma.tenantUser.findFirst({
      where: {
        userId: user.id,
      },
    });
    console.log('tenantUser::>>', tenantUser);
    if (!tenantUser) {
      throw new UnauthorizedException('User is not assigned to any tenant');
    }

    const accessToken = this.jwtService.sign({
      sub: user.id,
      tenantId: tenantUser.tenantId,
      role: tenantUser.role,
      type: 'access',
    });
    console.log('accessToken::>>', accessToken);
    const refreshToken = this.jwtService.sign(
      {
        sub: user.id,
        sessionId,
        type: 'refresh',
      },
      {
        expiresIn: process.env.JWT_REFRESH_EXPIRES as StringValue,
      },
    );
    // console.log('refreshToken', refreshToken);
    const tokenHash = await bcrypt.hash(refreshToken, 10);
    await this.prisma.refreshToken.create({
      data: {
        sessionId,
        userId: user.id,
        tokenHash,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
    });
    return {
      success: true,
      message: 'Login successful',
      accessToken,
      refreshToken,
    };
  }
  async me(userId: number) {
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }
}
