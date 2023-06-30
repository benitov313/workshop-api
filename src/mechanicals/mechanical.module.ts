import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataBasesEnum } from 'src/enum/data-bases.enum';
import { MechanicalsController } from './controllers/mechanicals/mechanicals.controller';
import { MechanicalsService } from './services/mechanicals/mechanicals.service';
import { Mechanical } from './../persistence/mechanical.entity';
import { MicroServiceModule } from 'src/micro-service/micro-service.module';

@Module({
  imports: [TypeOrmModule.forFeature([Mechanical])],
  controllers: [MechanicalsController],
  providers: [MechanicalsService],
})
export class MechanicalModule {}
