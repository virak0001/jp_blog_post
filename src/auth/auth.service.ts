import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { pick } from 'lodash';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findUserByName(username);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
          }
          return null;
    }

    async login(user: User) {
        return {
            token: this.createAccessToken(user)
        };
    }

    async register(user: CreateUserDto) {
        return this.usersService.create(user)
    }

    async createAccessToken(user: User): Promise<any> {
        const token = this.jwtService.sign(user);
        return { token };
    }
}
