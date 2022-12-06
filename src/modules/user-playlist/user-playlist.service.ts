import { Injectable } from '@nestjs/common';
import { CreateUserPlaylistDto } from './dto/create-user-playlist.dto';
import { UpdateUserPlaylistDto } from './dto/update-user-playlist.dto';

@Injectable()
export class UserPlaylistService {
  create(createUserPlaylistDto: CreateUserPlaylistDto) {
    return 'This action adds a new userPlaylist';
  }

  findAll() {
    return `This action returns all userPlaylist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userPlaylist`;
  }

  update(id: number, updateUserPlaylistDto: UpdateUserPlaylistDto) {
    return `This action updates a #${id} userPlaylist`;
  }

  remove(id: number) {
    return `This action removes a #${id} userPlaylist`;
  }
}
