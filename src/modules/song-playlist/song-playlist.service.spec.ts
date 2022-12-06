import { Test, TestingModule } from '@nestjs/testing';
import { SongPlaylistService } from './song-playlist.service';

describe('SongPlaylistService', () => {
  let service: SongPlaylistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SongPlaylistService],
    }).compile();

    service = module.get<SongPlaylistService>(SongPlaylistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
