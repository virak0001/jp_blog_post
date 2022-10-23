import { User } from 'src/users/entities/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'id',
      })
      id: number;
    
      @Column({
        nullable: false,
        default: '',
      })
      title: string;
    
      @Column({
        nullable: false,
        default: '',
      })
      description: string;

      @ManyToOne(() => User, (user) => user.posts)
      user: User
  
}
