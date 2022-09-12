import { IsEmail, IsString, IsNotEmpty, Length } from "class-validator";

export class AuthDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 20, { message: 'Password has to be at between 3 to 20 chars' })
    password: string;
}