import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateMechanicalDto } from 'src/mechanicals/dto/mechanicals.dtos';
import { MechanicalsService } from 'src/mechanicals/services/mechanicals/mechanicals.service';

@Controller('mechanicals')
export class MechanicalsController {
  constructor(private readonly mechanicalService: MechanicalsService) {}

  @Get(':id')
  findUsersById(@Param('id', ParseIntPipe) id: number) {
    return this.mechanicalService.findUsersById(id);
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
