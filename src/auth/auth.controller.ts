import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
      private _authService: AuthService
    ) {}

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Request() req: any) {
      return req.user;
    }

    @Post('/register')
    async register(@Body() req: CreateUserDto) {
      return this._authService.register(req)
    }
}
