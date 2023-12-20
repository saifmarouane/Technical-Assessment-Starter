import { Test, TestingModule } from '@nestjs/testing';
import { TestlongchainController } from './testlongchain.controller';

describe('TestlongchainController', () => {
  let controller: TestlongchainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestlongchainController],
    }).compile();

    controller = module.get<TestlongchainController>(TestlongchainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
