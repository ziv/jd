import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MessengerApiModule } from '../messenger-api';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
    }),
    MessengerApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
