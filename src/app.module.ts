import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [UserModule, ArticleModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
