import { Module } from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import {JwtModule} from "@nestjs/jwt";
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
  imports:[UserModule,PassportModule,ProxyModule,JwtModule.registerAsync({  // ← Cambiar a registerAsync
    useFactory: () => ({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: process.env.EXPIRES_IN,
        audience: process.env.APP_URL
      }
    })
  })],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy,JwtStrategy]
})
export class AuthModule { }
