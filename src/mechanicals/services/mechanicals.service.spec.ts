import { Test, TestingModule } from '@nestjs/testing';
import { MechanicalsService } from './mechanicals.service';
import { CreateMechanicalDto } from '../dto/mechanicals.dtos';
import { Mechanical } from '../../persistence';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('MechanicalsService', () => {
  let mechanicalsService: MechanicalsService;
  let mechanicalRepository: Repository<Mechanical>;
  const REPOSITORY_MECHANICAL = getRepositoryToken(Mechanical);

  const mechanicalMock = new Mechanical();
  mechanicalMock.mechanicId = '1fa3ace6-4533-42d0-a48d-158ffb9db1b2';
  mechanicalMock.fullName = 'Sergio Pana';
  mechanicalMock.dni = '234525';
  mechanicalMock.phone = '7533533';

  const mockMecRepository = {
    create: jest.fn(),
    findOneBy: jest.fn(),
    find: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MechanicalsService,
        {
          provide: getRepositoryToken(Mechanical),
          useValue: mockMecRepository,
        },
      ],
    }).compile();

    mechanicalsService = module.get<MechanicalsService>(MechanicalsService);
    mechanicalRepository = module.get<Repository<Mechanical>>(
      REPOSITORY_MECHANICAL,
    );
  });

  it('should be defined', () => {
    expect(mechanicalsService).toBeDefined();
  });

  describe('Create Mechanical', () => {
    it('Should call save method', async () => {
      const newMechanical = new CreateMechanicalDto();

      await mechanicalsService.createUser(newMechanical);
      expect(mechanicalRepository.save).toHaveBeenCalled();
    });

    it('Should call create method', async () => {
      const newMechanical = new CreateMechanicalDto();

      await mechanicalsService.createUser(newMechanical);
      expect(mechanicalRepository.create).toHaveBeenCalled();
    });
  });

  describe('getMechanicalById', () => {
    it('find mechanical', async () => {
      const mechanical = {
        mechanicId: 'dbf6f787-18dc-4620-ae80-dc4619972957',
        fullName: 'Assuresoft',
        dni: '355452',
        phone: '345354',
      };
      const findOneSpy = jest
        .spyOn(mechanicalsService, 'findMechanicById')
        .mockResolvedValue(mechanical as Mechanical);

      const foundCompany = await mechanicalsService.findMechanicById(
        'dbf6f787-18dc-4620-ae80-dc4619972957',
      );
      expect(foundCompany).toEqual(mechanical);
      expect(findOneSpy).toHaveBeenCalledWith(
        'dbf6f787-18dc-4620-ae80-dc4619972957',
      );
    });
  });

  describe('Get all mechanicals', () => {
    it('Find mechanicals should be call', async () => {
      const responseMechanical = [mechanicalMock];
      const serviceSpy = jest.spyOn(mechanicalsService, 'findAll');

      await mechanicalsService.findAll();
      expect(serviceSpy).toBeCalled();
    });
  });

  // Tests that a new user can be created with valid data
  // it('test_create_user_valid_data', async () => {
  //   const createMechanicalDto = new CreateMechanicalDto();
  //   createMechanicalDto.fullName = 'John Doe';
  //   createMechanicalDto.phone = '123456789';
  //   createMechanicalDto.dni = '12345';

  //   const newUser = await mechanicalsService.createUser(createMechanicalDto);

  //   expect(newUser.fullName).toEqual(createMechanicalDto.fullName);
  //   expect(newUser.phone).toEqual(createMechanicalDto.phone);
  //   expect(newUser.dni).toEqual(createMechanicalDto.dni);
  // });

  // Tests that a new user cannot be created with invalid data
  // it('should save an employee, verifying works getCompanyById', async () => {
  //   jest
  //     .spyOn(companyService, 'getCompanyById')
  //     .mockImplementation((id: '1fa3ace6-4533-42d0-a48d-158ffb9db1b2') =>
  //       Promise.resolve(mockMecRepository),
  //     );
  //   jest
  //     .spyOn(mailAppService, 'sendInvitationToTheEmploye')
  //     .mockResolvedValue(Promise.resolve());
  //   await employeeService.saveEmployee(employee, mockMecRepository.id);
  //   expect(employeesRepository.save).toHaveBeenCalled();
  // });

  // it('test_create_user_invalid_data', async () => {
  //   const createMechanicalDto = new CreateMechanicalDto();
  //   createMechanicalDto.fullName = 'Jo';
  //   createMechanicalDto.phone = '123';
  //   createMechanicalDto.dni = '12';

  //   await expect(
  //     mechanicalsService.createUser(createMechanicalDto),
  //   ).rejects.toThrow();
  // });

  // Tests that a mechanic can be found by ID
  // it('test_find_mechanic_by_id', async () => {
  //   const createMechanicalDto = new CreateMechanicalDto();
  //   createMechanicalDto.fullName = 'John Doe';
  //   createMechanicalDto.phone = '123456789';
  //   createMechanicalDto.dni = '12345';

  //   const newUser = await mechanicalsService.createUser(createMechanicalDto);

  //   const foundUser = await mechanicalsService.findMechanicById(
  //     newUser.mechanicId,
  //   );

  //   expect(foundUser.fullName).toEqual(newUser.fullName);
  //   expect(foundUser.phone).toEqual(newUser.phone);
  //   expect(foundUser.dni).toEqual(newUser.dni);
  // });

  // // Tests that an error is thrown when trying to find a nonexistent mechanic by ID
  // it('test_find_nonexistent_mechanic_by_id', async () => {
  //   await expect(
  //     mechanicalsService.findMechanicById('nonexistent-id'),
  //   ).rejects.toThrow();
  // });

  // Tests that all mechanics can be retrieved
  // it('test_find_all_mechanics', async () => {
  //   const createMechanicalDto1 = new CreateMechanicalDto();
  //   createMechanicalDto1.fullName = 'John Doe';
  //   createMechanicalDto1.phone = '123456789';
  //   createMechanicalDto1.dni = '12345';

  //   const createMechanicalDto2 = new CreateMechanicalDto();
  //   createMechanicalDto2.fullName = 'Jane Doe';
  //   createMechanicalDto2.phone = '987654321';
  //   createMechanicalDto2.dni = '54321';

  //   await mechanicalsService.createUser(createMechanicalDto1);
  //   await mechanicalsService.createUser(createMechanicalDto2);

  //   const foundUsers = await mechanicalsService.findAll();

  //   expect(foundUsers.length).toEqual(2);
  // });
});
