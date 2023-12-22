import { Test, TestingModule } from '@nestjs/testing';
import { longchainService } from './longchain.service';

describe('TestlongchainService', () => {
  let service: longchainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [longchainService],
    }).compile();

    service = module.get<longchainService>(longchainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
