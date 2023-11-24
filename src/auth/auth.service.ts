import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { hash as bcryptHash } from 'bcrypt';
import { User } from '../users/users.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async generateToken(user: User) {
    return {
      token: this.jwtService.sign(user),
    };
  }
  async login(userDto: CreateUserDto) {
    return [];
  }

  async registration(userDto: CreateUserDto) {
    const candidate = this.userService.getUserByEmail(userDto.email);

    if (candidate) {
      throw new HttpException(
        'User with this email already exist',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await bcryptHash(userDto.password, 5);
    const user = this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });
  }
}
