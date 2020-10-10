import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './model/article.dto';
import { ArticleEntity } from './model/article.entity';

@Injectable()
export class ArticleService {
  constructor(@InjectRepository(ArticleEntity) private readonly articleRepo: Repository<ArticleEntity>){}
  getArticle() {
    return 'hello article';
  }

  async createArticle(user_id: number, data: CreateArticleDto) {
    let newArtile = { ...data, user_id: user_id}
    return await this.articleRepo.save(newArtile);
  }
}
