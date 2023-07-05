import { registerEnumType } from '@nestjs/graphql';

export enum StatusEnum {
  PENDING = 'pending',
  CANCELLED = 'cancelled',
  DONE = 'done',
}

registerEnumType(StatusEnum, {
  name: 'StatusEnum',
});
