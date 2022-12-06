import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SongPlaylistService } from './song-playlist.service';
import { CreateSongPlaylistDto } from './dto/create-song-playlist.dto';
import { UpdateSongPlaylistDto } from './dto/update-song-playlist.dto';

@Controller('song-playlist')
export class SongPlaylistController {
  constructor(private readonly songPlaylistService: SongPlaylistService) {}

  @Post()
  create(@Body() createSongPlaylistDto: CreateSongPlaylistDto) {
    return this.songPlaylistService.create(createSongPlaylistDto);
  }

  @Get()
  findAll() {
    return this.songPlaylistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songPlaylistService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSongPlaylistDto: UpdateSongPlaylistDto,
  ) {
    return this.songPlaylistService.update(+id, updateSongPlaylistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.songPlaylistService.remove(+id);
  }
}
