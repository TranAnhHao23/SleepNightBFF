import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UserModule} from './modules/user/user.module';
import {DatabaseModule} from './config/orm/database.module';
import {ConfigModule} from "@nestjs/config";
import {SongModule} from './modules/song/song.module';
import {PlaylistModule} from './modules/playlist/playlist.module';
import {MeditateTimeModule} from './modules/meditate-time/meditate-time.module';

@Module({
  imports: [UserModule, DatabaseModule, ConfigModule, SongModule, PlaylistModule, MeditateTimeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
