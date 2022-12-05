import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, IsUUID} from "@nestjs/class-validator";


export class CreateUserDto {
  // @ApiProperty()
  // @IsUUID()
  // userId: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty({
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    required: true,
  })
  password: string
}
