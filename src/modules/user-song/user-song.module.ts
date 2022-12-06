import { Module } from '@nestjs/common';
import { UserSongService } from './user-song.service';
import { UserSongController } from './user-song.controller';

@Module({
  controllers: [UserSongController],
  providers: [UserSongService],
})
export class UserSongModule {}
