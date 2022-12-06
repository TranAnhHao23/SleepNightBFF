import { PartialType } from '@nestjs/swagger';
import { CreateUserSongDto } from './create-user-song.dto';

export class UpdateUserSongDto extends PartialType(CreateUserSongDto) {}
