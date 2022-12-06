import { Injectable } from '@nestjs/common';
import { CreateSongPlaylistDto } from './dto/create-song-playlist.dto';
import { UpdateSongPlaylistDto } from './dto/update-song-playlist.dto';

@Injectable()
export class SongPlaylistService {
  create(createSongPlaylistDto: CreateSongPlaylistDto) {
    return 'This action adds a new songPlaylist';
  }

  findAll() {
    return `This action returns all songPlaylist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} songPlaylist`;
  }

  update(id: number, updateSongPlaylistDto: UpdateSongPlaylistDto) {
    return `This action updates a #${id} songPlaylist`;
  }

  remove(id: number) {
    return `This action removes a #${id} songPlaylist`;
  }
}
