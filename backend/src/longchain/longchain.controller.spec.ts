import { Test, TestingModule } from '@nestjs/testing';
import { longchainController } from './longchain.controller';

describe('TestlongchainController', () => {
  let controller: longchainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [longchainController],
    }).compile();

    controller = module.get<longchainController>(longchainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
