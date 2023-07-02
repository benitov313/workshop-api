import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataBasesEnum } from './enum/data-bases.enum';
import { MechanicalModule } from './mechanicals/mechanical.module';
import entities from './persistence';
import { AppointmentModule } from './appointment/appointment.module';
import { MicroServiceModule } from './micro-service/micro-service.module';
import { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceOptions),
    MechanicalModule,
    AppointmentModule,
    MicroServiceModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
