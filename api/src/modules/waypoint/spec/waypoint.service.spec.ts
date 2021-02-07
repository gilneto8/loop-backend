import { Test, TestingModule } from '@nestjs/testing';
import { WaypointService } from '../waypoint.service';

describe('WaypointService', () => {
  let service: WaypointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WaypointService],
    }).compile();

    service = module.get<WaypointService>(WaypointService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
