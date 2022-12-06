import { Injectable } from '@nestjs/common';
import { CreateUserSongDto } from './dto/create-user-song.dto';
import { UpdateUserSongDto } from './dto/update-user-song.dto';

@Injectable()
export class UserSongService {
  create(createUserSongDto: CreateUserSongDto) {
    return 'This action adds a new userSong';
  }

  findAll() {
    return `This action returns all userSong`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userSong`;
  }

  update(id: number, updateUserSongDto: UpdateUserSongDto) {
    return `This action updates a #${id} userSong`;
  }

  remove(id: number) {
    return `This action removes a #${id} userSong`;
  }
}
