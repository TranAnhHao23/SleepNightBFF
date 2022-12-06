import { Test, TestingModule } from '@nestjs/testing';
import { MeditateTimeService } from './meditate-time.service';

describe('MeditateTimeService', () => {
  let service: MeditateTimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeditateTimeService],
    }).compile();

    service = module.get<MeditateTimeService>(MeditateTimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
