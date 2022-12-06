import { Module } from '@nestjs/common';
import { UserPlaylistService } from './user-playlist.service';
import { UserPlaylistController } from './user-playlist.controller';

@Module({
  controllers: [UserPlaylistController],
  providers: [UserPlaylistService],
})
export class UserPlaylistModule {}
