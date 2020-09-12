import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { ApiError, createUserDto, userResposeDto } from './model/user.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get('share')
  async getShare() {
    return this._userService.getShare();
  }

  @Get(':id')
  @ApiOkResponse({ type: userResposeDto })
  @ApiBadRequestResponse({ type: ApiError })
  @ApiParam({ name: 'id', type: Number, required: true })
  @ApiQuery({ name: 'username', type: String, required: false })
  getUser(
    @Param('id', ParseIntPipe) id: number,
    @Query('username') username: string,
  ) {
    return this._userService.getUser(id, username);
  }

  @Get()
  async getArticle() {
    return this._userService.getArticle();
  }

  @Post()
  @ApiOkResponse()
  @ApiBadRequestResponse({ type: ApiError })
  createUser(@Body() data: createUserDto) {
    return this._userService.createUser(data);
  }
}
