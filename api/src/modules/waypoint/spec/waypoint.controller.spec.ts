import { Test, TestingModule } from '@nestjs/testing';
import { WaypointController } from '../waypoint.controller';

describe('WaypointController', () => {
  let controller: WaypointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WaypointController],
    }).compile();

    controller = module.get<WaypointController>(WaypointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
