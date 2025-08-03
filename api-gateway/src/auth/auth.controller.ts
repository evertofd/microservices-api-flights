import { Controller,Post,Req,Body, UseGuards } from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger'
import { UserDto } from 'src/user/dto/user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/loca-auth-guard';

@ApiTags('Authentication')
@Controller('api/v2/auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('signin')
    async signin(@Req() req){
        console.log('aqui entro?')
        return await this.authService.signIn(req.user)
    }

    @Post('signup')
    async signUp(@Body() userDto:UserDto ){
        return await this.authService.singUp(userDto);
    }
}
