import { forwardRef, Module } from '@nestjs/common';
import { ArticleModule } from '../article/article.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [forwardRef(() => ArticleModule)],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
