import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class userResposeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;
}

export class ApiError {
  @ApiProperty()
  status: number;

  @ApiProperty()
  message: string;
}

export class createUserDto {
  @ApiProperty()
  @IsNotEmpty()
  firstname: string;

  @ApiProperty()
  @IsNotEmpty()
  lastname: string;
}
