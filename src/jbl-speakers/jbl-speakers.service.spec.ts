import { Test, TestingModule } from '@nestjs/testing';
import { JblSpeakersService } from './jbl-speakers.service';

describe('JblSpeakersService', () => {
  let service: JblSpeakersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JblSpeakersService],
    }).compile();

    service = module.get<JblSpeakersService>(JblSpeakersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
