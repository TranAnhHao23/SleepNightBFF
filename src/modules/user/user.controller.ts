import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('USER')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    return  this.userService.create(createUserDto);
  }

  @Get('getAll')
  async findAll() {
    return this.userService.findAll();
  }

  @Get('/get/:id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch('/update/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
