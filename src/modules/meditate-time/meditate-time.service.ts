import { Injectable } from '@nestjs/common';
import { CreateMeditateTimeDto } from './dto/create-meditate-time.dto';
import { UpdateMeditateTimeDto } from './dto/update-meditate-time.dto';

@Injectable()
export class MeditateTimeService {
  create(createMeditateTimeDto: CreateMeditateTimeDto) {
    return 'This action adds a new meditateTime';
  }

  findAll() {
    return `This action returns all meditateTime`;
  }

  findOne(id: number) {
    return `This action returns a #${id} meditateTime`;
  }

  update(id: number, updateMeditateTimeDto: UpdateMeditateTimeDto) {
    return `This action updates a #${id} meditateTime`;
  }

  remove(id: number) {
    return `This action removes a #${id} meditateTime`;
  }
}
