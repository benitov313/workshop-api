import { DataSource, DataSourceOptions } from 'typeorm';
import { DataBasesEnum } from 'src/enum/data-bases.enum';

export const dataSourceOptions: DataSourceOptions = {
  type: DataBasesEnum.POSTGRES,
  host: 'workshop-db',
  port: 5432,
  username: 'postgres',
  password: 'nestpostgres',
  database: 'nesties',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
