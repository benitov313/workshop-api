import { Test, TestingModule } from '@nestjs/testing';
import { MechanicalsController } from './mechanicals.controller';

describe('MechanicalsController', () => {
  let controller: MechanicalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MechanicalsController],
    }).compile();

    controller = module.get<MechanicalsController>(MechanicalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
