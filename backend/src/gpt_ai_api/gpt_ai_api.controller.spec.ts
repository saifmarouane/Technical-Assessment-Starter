import { Test, TestingModule } from '@nestjs/testing';
import { GptAiApiController } from './gpt_ai_api.controller';

describe('GptAiApiController', () => {
  let controller: GptAiApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GptAiApiController],
    }).compile();

    controller = module.get<GptAiApiController>(GptAiApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
