import { Test, TestingModule } from '@nestjs/testing';
import { JblSpeakersController } from './jbl-speakers.controller';

describe('JblSpeakersController', () => {
  let controller: JblSpeakersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JblSpeakersController],
    }).compile();

    controller = module.get<JblSpeakersController>(JblSpeakersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
