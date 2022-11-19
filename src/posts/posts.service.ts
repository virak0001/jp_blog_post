import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  @InjectRepository(Post)
  private readonly repository: Repository<Post>;

  create(createPostDto: CreatePostDto, user: User) {
    const payload = { ...createPostDto, user };
    return this.repository.save(payload);
  }

  findAll(user: User) {
    const userId = user.id;
    const myPosts = this.repository.find({
      where: { userId },
    });
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  update(updatePostDto: UpdatePostDto) {
    const { id } = updatePostDto;
    const post = this.repository.findOne({ where: { id } });
    if (!post) {
      throw new HttpException('Post not found!', HttpStatus.NOT_FOUND);
    }
    return this.repository.save(updatePostDto);
  }

  remove(id: string) {
    const post = this.repository.findOne({ where: { id } });
    if (!post) {
      throw new HttpException('Post not found!', HttpStatus.NOT_FOUND);
    }
    return this.repository.delete(id);
  }
}
