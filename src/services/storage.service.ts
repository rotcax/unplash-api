import { Injectable } from '@nestjs/common';
import { config, S3 } from 'aws-sdk';

@Injectable()
export class StorageService {
  constructor() {
    config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
      region: process.env.AWS_REGION,
    });
  }

  async uploadFile(
    dataBuffer: Buffer,
    filename: string,
    mimetype?: string,
  ): Promise<S3.ManagedUpload.SendData> {
    const s3 = new S3();
    const uploadResult = await s3
      .upload({
        Bucket: process.env.AWS_BUCKET,
        Body: dataBuffer,
        Key: `${filename}`,
        ContentType: mimetype,
      })
      .promise();

    return uploadResult;
  }
}
