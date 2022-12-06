import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeditateTimeService } from './meditate-time.service';
import { CreateMeditateTimeDto } from './dto/create-meditate-time.dto';
import { UpdateMeditateTimeDto } from './dto/update-meditate-time.dto';

@Controller('meditate-time')
export class MeditateTimeController {
  constructor(private readonly meditateTimeService: MeditateTimeService) {}

  @Post()
  create(@Body() createMeditateTimeDto: CreateMeditateTimeDto) {
    return this.meditateTimeService.create(createMeditateTimeDto);
  }

  @Get()
  findAll() {
    return this.meditateTimeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.meditateTimeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMeditateTimeDto: UpdateMeditateTimeDto) {
    return this.meditateTimeService.update(+id, updateMeditateTimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meditateTimeService.remove(+id);
  }
}
