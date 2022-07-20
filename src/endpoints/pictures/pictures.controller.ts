import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { UploadFromUrlDto, UploadFromUrlParamsDto } from './pictures.dto';
import { PicturesService } from './pictures.service';

@ApiTags('Pictures')
@Controller('pictures')
export class PicturesController {
  constructor(private readonly picturesService: PicturesService) {}

  @Get()
  findByKeyword(@Query() params): Observable<any> {
    return this.picturesService.findByKeyword(params);
  }

  @Get('upload/:id')
  uploadFromUrl(
    @Param() params: UploadFromUrlParamsDto,
  ): Promise<UploadFromUrlDto> {
    return this.picturesService.uploadFromUrl(params);
  }
}
