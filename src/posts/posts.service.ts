import { Injectable } from '@nestjs/common';
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
    const payload = { ...createPostDto, user }
    return this.repository.save(payload)
  }

  findAll(user: User) {
    const userId = user.id
    const myPosts = this.repository.findOne({
      where: {userId}
    })
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
