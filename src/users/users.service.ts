import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  @InjectRepository(User)
  private readonly repository: Repository<User>;

  async create(createUserDto: CreateUserDto) {
    const user = await this.findUserByName(createUserDto.username)
    if(user) {
      throw new HttpException('User already exist!', HttpStatus.BAD_REQUEST);
    }
    const register = await this.repository.save(createUserDto)
    if(!register) {
      throw new Error("Create account fail!");
    }
    return register;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  findUserByName(username: string) {
      return this.repository.findOne({ where: {username} })
  }
  
  async findUseByEamil(email: string) {
    return this.repository.findOne({
      where: {email}
    })
  }
}

