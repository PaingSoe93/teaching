import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {
  getService() {
    return 'this is share service';
  }
}
