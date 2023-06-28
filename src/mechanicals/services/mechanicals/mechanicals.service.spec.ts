import { Test, TestingModule } from '@nestjs/testing';
import { MechanicalsService } from './mechanicals.service';

describe('MechanicalsService', () => {
  let service: MechanicalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MechanicalsService],
    }).compile();

    service = module.get<MechanicalsService>(MechanicalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
