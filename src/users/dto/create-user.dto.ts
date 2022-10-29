import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @IsNotEmpty()
    readonly password: string;

    @IsString()
    @IsNotEmpty()
    readonly username: string
}
