import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UserModule} from './modules/user/user.module';
import {DatabaseModule} from './config/orm/database.module';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [UserModule, DatabaseModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
