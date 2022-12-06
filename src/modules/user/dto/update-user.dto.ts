import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from '@nestjs/class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    required: false,
  })
  @IsString()
  name: string;

  @ApiProperty({
    required: false,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    required: false,
  })
  password: string;
}
