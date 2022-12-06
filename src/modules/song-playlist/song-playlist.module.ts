import { Module } from '@nestjs/common';
import { SongPlaylistService } from './song-playlist.service';
import { SongPlaylistController } from './song-playlist.controller';

@Module({
  controllers: [SongPlaylistController],
  providers: [SongPlaylistService],
})
export class SongPlaylistModule {}
