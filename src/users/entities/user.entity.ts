import { AbstractSoftDeleteEntity } from 'helper/dto/abstract-soft-delete.entity';
import { Post } from 'src/posts/entities/post.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('users')
export class User extends AbstractSoftDeleteEntity {
      @Column({
        nullable: false,
        default: '',
      })
      username: string;
    
      @Column({
        name: 'email',
        nullable: false,
        default: '',
      })
      email: string;
    
      @Column({
        nullable: false,
        default: '',
      })
      password: string;

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[]
}
