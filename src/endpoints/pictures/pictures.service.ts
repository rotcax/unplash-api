import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FetchService, StorageService } from '../../services';
import { v4 as uuid } from 'uuid';
import {
  FindByKeywordParamsDto,
  UploadFromUrlDto,
  UploadFromUrlParamsDto,
} from './pictures.dto';

@Injectable()
export class PicturesService {
  constructor(
    private readonly fetchService: FetchService,
    private readonly storageService: StorageService,
  ) {}

  findByKeyword(params: FindByKeywordParamsDto): Observable<any[]> {
    return this.fetchService.makeRequest(
      `${process.env.UNPLASH_URL}/search/photos`,
      params,
    );
  }

  async uploadFromUrl({
    id,
  }: UploadFromUrlParamsDto): Promise<UploadFromUrlDto> {
    const photo: any = await this.fetchService
      .makeRequest(`${process.env.UNPLASH_URL}/photos/${id}`)
      .toPromise();

    const fileStream = await this.fetchService
      .makeRequest(photo.urls.regular, {}, { responseType: 'arraybuffer' })
      .toPromise();

    const result = await this.storageService.uploadFile(fileStream, uuid());
    return { result: result.Key };
  }
}
