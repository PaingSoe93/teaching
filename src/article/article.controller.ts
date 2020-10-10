import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './model/article.dto';

@Controller('article')
@ApiTags('articles')
export class ArticleController {
    constructor(private readonly articleService: ArticleService){}

    @Post(':id')
    @ApiParam({name: 'id', type: Number, required: true})
    createArticle(@Param('id', ParseIntPipe) id: number, @Body() data: CreateArticleDto){
        return this.articleService.createArticle(id, data);
    }
}
