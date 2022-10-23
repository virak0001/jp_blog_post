import { Post } from 'src/posts/entities/post.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'id',
      })
      id: number;
    
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
