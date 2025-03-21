import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import * as dto from './dto/users.dto';

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService       
    ) {}

    @Post() 
    @HttpCode(HttpStatus.CREATED)
    async createUser(@Body() user: dto.createUserDto) {
        return this.userService.createUser(user);
    }
}
