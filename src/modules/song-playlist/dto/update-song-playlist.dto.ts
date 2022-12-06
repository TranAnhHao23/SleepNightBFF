import { PartialType } from '@nestjs/swagger';
import { CreateSongPlaylistDto } from './create-song-playlist.dto';

export class UpdateSongPlaylistDto extends PartialType(CreateSongPlaylistDto) {}
