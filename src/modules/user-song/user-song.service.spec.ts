import { Test, TestingModule } from '@nestjs/testing';
import { UserSongService } from './user-song.service';

describe('UserSongService', () => {
  let service: UserSongService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserSongService],
    }).compile();

    service = module.get<UserSongService>(UserSongService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
