import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './config/orm/database.module';
import { ConfigModule } from '@nestjs/config';
import { SongModule } from './modules/song/song.module';
import { PlaylistModule } from './modules/playlist/playlist.module';
import { MeditateTimeModule } from './modules/meditate-time/meditate-time.module';
import { UserSongModule } from './modules/user-song/user-song.module';
import { UserPlaylistModule } from './modules/user-playlist/user-playlist.module';
import { SongPlaylistModule } from './modules/song-playlist/song-playlist.module';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    ConfigModule,
    SongModule,
    PlaylistModule,
    MeditateTimeModule,
    UserSongModule,
    UserPlaylistModule,
    SongPlaylistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
