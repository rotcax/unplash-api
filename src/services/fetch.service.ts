import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class FetchService {
  constructor(private readonly httpService: HttpService) {}

  makeRequest(
    url: string,
    params = {},
    config: AxiosRequestConfig = {},
  ): Observable<any> {
    return this.httpService
      .get(url, {
        params,
        headers: {
          Authorization: `${process.env.UNPLASH_TYPE_TOKEN} ${process.env.UNPLASH_CLIENT_ID}`,
        },
        ...config,
      })
      .pipe(
        map((res: AxiosResponse) => {
          return res.data;
        }),
        catchError((e: AxiosError) => {
          throw new HttpException(e.response.data, e.response.status);
        }),
      );
  }
}
