import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { FlightController } from './flight.controller';

@Module({
  controllers: [FlightController],
  imports:[ProxyModule]
})
export class FlightModule {}
