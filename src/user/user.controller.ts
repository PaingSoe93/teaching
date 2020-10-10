import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ApiError, createUserDto } from './model/user.dto';
import { UserEntity } from './model/user.entity';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get(':id')
  @ApiOkResponse({ type: UserEntity })
  @ApiBadRequestResponse({ type: ApiError })
  @ApiParam({ name: 'id', type: Number, required: true })
  getUser(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this._userService.getUser(id);
  }

  @Get(':id/articles')
  @ApiParam({name: 'id', type: Number, required: true})
  getAllArticles(@Param('id', ParseIntPipe) id: number){
    return this._userService.getArticle(id);
  }

  @Post()
  @ApiOkResponse()
  @ApiBadRequestResponse({ type: ApiError })
  createUser(@Body() data: createUserDto) {
    return this._userService.createUser(data);
  }
}
