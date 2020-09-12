import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ArticleService } from '../article/article.service';
import { SharedService } from '../shared/shared.service';
import { createUserDto, userResposeDto } from './model/user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => ArticleService))
    private readonly _articleService: ArticleService,
    private readonly _sharedService: SharedService,
  ) {}
  async getUser(id: number, username: string): Promise<userResposeDto> {
    return { id, username };
  }

  async createUser(data: createUserDto): Promise<createUserDto> {
    return data;
  }

  getArticle() {
    return this._articleService.getArticle();
  }

  getShare() {
    return this._sharedService.getService();
  }
}
