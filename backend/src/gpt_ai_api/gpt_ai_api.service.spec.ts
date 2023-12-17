import { Test, TestingModule } from '@nestjs/testing';
import { GptAiApiService } from './gpt_ai_api.service';

describe('GptAiApiService', () => {
  let service: GptAiApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GptAiApiService],
    }).compile();

    service = module.get<GptAiApiService>(GptAiApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
