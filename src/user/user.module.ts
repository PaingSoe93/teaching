import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from '../article/article.module';
import { UserEntity } from './model/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), forwardRef(() => ArticleModule)],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
