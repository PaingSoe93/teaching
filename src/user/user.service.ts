import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleService } from '../article/article.service';
import { SharedService } from '../shared/shared.service';
import { createUserDto } from './model/user.dto';
import { UserEntity } from './model/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepo : Repository<UserEntity>,
    @Inject(forwardRef(() => ArticleService))
    private readonly _articleService: ArticleService,
    private readonly _sharedService: SharedService,
  ) {}
  async getUser(id: number): Promise<UserEntity> {
    return await this.userRepo.findOne(id);
  }

  async createUser(data: createUserDto): Promise<createUserDto> {
    return await this.userRepo.save(data);
  }

  async getArticle(id: number) {
    return await this.userRepo.findOne(id, { relations: ['articles']});
  }

  getShare() {
    return this._sharedService.getService();
  }
}
