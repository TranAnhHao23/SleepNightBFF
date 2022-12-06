import { PartialType } from '@nestjs/swagger';
import { CreateMeditateTimeDto } from './create-meditate-time.dto';

export class UpdateMeditateTimeDto extends PartialType(CreateMeditateTimeDto) {}
