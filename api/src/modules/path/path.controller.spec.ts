import { Test, TestingModule } from '@nestjs/testing';
import { PathController } from './path.controller';

describe('PathController', () => {
  let controller: PathController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PathController],
    }).compile();

    controller = module.get<PathController>(PathController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
