import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  getArticle() {
    return 'hello article';
  }
}
