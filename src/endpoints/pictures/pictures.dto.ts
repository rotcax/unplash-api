import { ApiProperty } from '@nestjs/swagger';

export class FindByKeywordParamsDto {
  @ApiProperty({ required: true })
  query: string;

  @ApiProperty({ required: false })
  page?: number;

  @ApiProperty({ required: false })
  per_page?: number;

  @ApiProperty({ required: false })
  order_by?: string;

  @ApiProperty({ required: false })
  content_filter?: string;

  @ApiProperty({ required: false })
  color?: string;

  @ApiProperty({ required: false })
  orientation?: string;
}

export class FindByKeywordDto {
  @ApiProperty()
  total: number;

  @ApiProperty()
  total_pages: number;

  @ApiProperty()
  results: any[];
}

export class UploadFromUrlParamsDto {
  @ApiProperty({ required: true })
  id: string;
}

export class UploadFromUrlDto {
  @ApiProperty()
  result: string;
}
