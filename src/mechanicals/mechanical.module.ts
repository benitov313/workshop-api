import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mechanical } from './../persistence/mechanical.entity';
import { MechanicalsController } from './controllers/mechanicals.controller';
import { MechanicalsService } from './services/mechanicals.service';

@Module({
  imports: [TypeOrmModule.forFeature([Mechanical])],
  controllers: [MechanicalsController],
  providers: [MechanicalsService],
})
export class MechanicalModule {}
