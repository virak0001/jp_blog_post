import { IsString, IsNotEmpty } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly content: string;

  @IsString()
  readonly image: string;

  user: User;
}
