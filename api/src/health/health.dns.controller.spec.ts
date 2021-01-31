import { Test, TestingModule } from '@nestjs/testing';
import { DNSHealthController } from './health.dns.controller';

describe('HealthController', () => {
  let controller: DNSHealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DNSHealthController],
    }).compile();

    controller = module.get<DNSHealthController>(DNSHealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
