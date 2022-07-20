import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PicturesController } from './pictures.controller';
import { PicturesService } from './pictures.service';
import { FetchService, StorageService } from '../../services';

@Module({
  imports: [HttpModule],
  controllers: [PicturesController],
  providers: [PicturesService, FetchService, StorageService],
})
export default class PicturesModule {}
