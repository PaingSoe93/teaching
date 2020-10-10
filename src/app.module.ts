import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { SharedModule } from './shared/shared.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config/dist/config.service';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService : ConfigService) => ({
      type: 'postgres',
      host: configService.get("PG_HOST"),
      port: configService.get("PG_PORT"),
      username: configService.get("PG_USER"),
      password: configService.get("PG_PASSWORD"),
      database: configService.get("PG_DATABASE"),
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    })
  }),
  UserModule, ArticleModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
