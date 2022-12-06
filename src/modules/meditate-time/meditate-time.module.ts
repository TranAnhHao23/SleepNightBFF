import { Module } from '@nestjs/common';
import { MeditateTimeService } from './meditate-time.service';
import { MeditateTimeController } from './meditate-time.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeditateTime } from './entities/meditate-time.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MeditateTime])],
  controllers: [MeditateTimeController],
  providers: [MeditateTimeService],
  exports: [MeditateTimeService],
})
export class MeditateTimeModule {}
