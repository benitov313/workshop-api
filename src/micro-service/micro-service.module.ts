import { Module } from '@nestjs/common';
import { MicroService } from './services/microservice.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [MicroService],
  exports: [MicroService],
})
export class MicroServiceModule {}
