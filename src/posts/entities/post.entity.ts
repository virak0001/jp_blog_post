import { AbstractSoftDeleteEntity } from 'helper/dto/abstract-soft-delete.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
@Entity('posts')
export class Post extends AbstractSoftDeleteEntity {
  @Column({
    nullable: false,
    default: '',
  })
  title: string;

  @Column({
    nullable: false,
    default: '',
  })
  content: string;

  @Column({
    nullable: false,
  })
  userId: string;

  @Column({
    nullable: false,
    default: '',
  })
  image: string;

  @Column({
    nullable: false,
    default: '',
  })
  type: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
