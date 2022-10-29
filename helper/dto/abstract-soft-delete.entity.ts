import { Exclude } from 'class-transformer';
import { DeleteDateColumn } from 'typeorm';

import { AbstractEntity } from './abstract.entity';

export abstract class AbstractSoftDeleteEntity extends AbstractEntity {
  @DeleteDateColumn()
  @Exclude()
  deletedAt: Date;
}
