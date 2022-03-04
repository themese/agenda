import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Me cago en tu pesho y yo en el tuyo leo';
  }
}
