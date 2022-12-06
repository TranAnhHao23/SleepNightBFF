import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserSongService } from './user-song.service';
import { CreateUserSongDto } from './dto/create-user-song.dto';
import { UpdateUserSongDto } from './dto/update-user-song.dto';

@Controller('user-song')
export class UserSongController {
  constructor(private readonly userSongService: UserSongService) {}

  @Post()
  create(@Body() createUserSongDto: CreateUserSongDto) {
    return this.userSongService.create(createUserSongDto);
  }

  @Get()
  findAll() {
    return this.userSongService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userSongService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserSongDto: UpdateUserSongDto,
  ) {
    return this.userSongService.update(+id, updateUserSongDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userSongService.remove(+id);
  }
}
