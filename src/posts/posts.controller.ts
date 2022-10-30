import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto,@Request() req) {
    return this.postsService.create(createPostDto, req.user);
  }
 
  @Get()
  findAll(@Request() req) {
    return this.postsService.findAll(req.user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
  //   return this.postsService.update(+id, updatePostDto);
  // }

  @Put()
  update(@Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
