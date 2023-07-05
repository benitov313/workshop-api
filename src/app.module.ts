import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataBasesEnum } from './enum/data-bases.enum';
import { MechanicalModule } from './mechanicals/mechanical.module';
import entities from './persistence';
import { AppointmentModule } from './appointment/appointment.module';
import { MicroServiceModule } from './micro-service/micro-service.module';
import { dataSourceOptions } from 'db/data-source';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { GraphqlModule } from './graphql/graphql.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema/schema.qql'),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceOptions),
    MechanicalModule,
    AppointmentModule,
    MicroServiceModule,
    GraphqlModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
