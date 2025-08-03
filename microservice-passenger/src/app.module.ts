import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassengerModule } from './passenger/passenger.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env.development'],
    isGlobal: true,
  }),
  MongooseModule.forRootAsync({
    useFactory: () => ({
      uri: process.env.URI_MONGODB,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  }),PassengerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
