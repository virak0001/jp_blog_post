import { AbstractSoftDeleteEntity } from 'helper/dto/abstract-soft-delete.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
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

      @ManyToOne(() => User, (user) => user.posts)
      user: User
  
}
