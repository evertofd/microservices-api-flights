import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  imports:[ProxyModule]
})
export class UserModule {}
