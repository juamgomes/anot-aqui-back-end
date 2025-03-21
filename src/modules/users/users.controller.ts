import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import * as dto from './dto/users.dto';
import { updateUserDto } from './dto/updateUser.dto';

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

    @Get()
    @HttpCode(HttpStatus.OK)
    async getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async getUserById(@Param('id') id: string) {
        return this.userService.getUserById(id);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    async updateUser(@Body() data: updateUserDto) {
        return this.userService.updateUser(data);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async deleteUser(@Param('id') id: string) {
        return this.userService.deleteUserById(id);
    }
}
