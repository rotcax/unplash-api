import { ApiProperty } from '@nestjs/swagger';

export class UploadFromUrlParamsDto {
  @ApiProperty({ required: true })
  id: string;
}

export class UploadFromUrlDto {
  @ApiProperty()
  result: string;
}
