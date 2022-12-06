import { Test, TestingModule } from '@nestjs/testing';
import { SongPlaylistController } from './song-playlist.controller';
import { SongPlaylistService } from './song-playlist.service';

describe('SongPlaylistController', () => {
  let controller: SongPlaylistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SongPlaylistController],
      providers: [SongPlaylistService],
    }).compile();

    controller = module.get<SongPlaylistController>(SongPlaylistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
