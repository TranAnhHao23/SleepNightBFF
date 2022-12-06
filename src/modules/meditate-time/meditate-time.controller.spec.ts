import { Test, TestingModule } from '@nestjs/testing';
import { MeditateTimeController } from './meditate-time.controller';
import { MeditateTimeService } from './meditate-time.service';

describe('MeditateTimeController', () => {
  let controller: MeditateTimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeditateTimeController],
      providers: [MeditateTimeService],
    }).compile();

    controller = module.get<MeditateTimeController>(MeditateTimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
