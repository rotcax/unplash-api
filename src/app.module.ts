import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PicturesModule } from './endpoints';

@Module({
  imports: [ConfigModule.forRoot(), PicturesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
