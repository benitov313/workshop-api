import { Global, Module } from '@nestjs/common';
import { MicroService } from './services/microservice.service';
import { HttpModule } from '@nestjs/axios';

@Global()
@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [MicroService],
  exports: [MicroService],
})
export class MicroServiceModule {}
