import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateMechanicalDto } from '../../mechanicals/dto/mechanicals.dtos';
import { MechanicalsService } from '../services/mechanicals.service';

@Controller('mechanicals')
export class MechanicalsController {
  constructor(private readonly mechanicalService: MechanicalsService) {}

  @Get(':id')
  findUsersById(@Param('id', ParseUUIDPipe) id: string) {
    return this.mechanicalService.findMechanicById(id);
  }

  @Get()
  findAll() {
    return this.mechanicalService.findAll();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createUsers(@Body() createMechanicalDto: CreateMechanicalDto) {
    return this.mechanicalService.createUser(createMechanicalDto);
  }
}
