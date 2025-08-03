import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { UserMSG } from 'src/common/constants';

@Controller()
export class UserController {

    constructor(private readonly userService: UserService) { }
    @MessagePattern(UserMSG.CREATE)
    create(@Payload() userDto: UserDto) {
        return this.userService.create(userDto)
    }

    @MessagePattern(UserMSG.FIND_ALL)
    findAll() {
        return this.userService.findAll()
    }

    @MessagePattern(UserMSG.FIND_ONE)
    findOne(@Payload() id: string) {
        return this.userService.findOne(id)
    }

    @MessagePattern(UserMSG.UPDATE)
    update(@Payload() payload: any) {
        return this.userService.update(payload.id, payload.userDto)
    }

    @MessagePattern(UserMSG.DELETE)
    delete(@Payload() id: string) {
        return this.userService.delete(id)
    }
    @MessagePattern(UserMSG.VALID_USER)
    async validateUser(@Payload() payload:any): Promise<any> {
        const user = await this.userService.findByUsername(payload.username);
        if (!user) return null;

        const isValidPassword = await this.userService.checkPassword(payload.password, user.password)
        if (isValidPassword && user) {
            return user
        }
        return null
    }
}
