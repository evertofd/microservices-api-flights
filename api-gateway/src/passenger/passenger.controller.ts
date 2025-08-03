import { Controller, Post, Body, Get, Param, Delete, Put,UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { PassengerDTO } from './dto/passenger.dto';
import { IPassenger } from 'src/common/interfaces/passenger.interface';
import { PassengerMSG } from 'src/common/constants';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Passengers')
@UseGuards(JwtAuthGuard)
@Controller('api/v2/passenger')
export class PassengerController {
    private _clientProxyUser;

    constructor(private readonly clientProxy: ClientProxySuperFlights) {
        this._clientProxyUser = this.clientProxy.clientProxyPassengers();
    }

    @Post()
    create(@Body() passengerDTO: PassengerDTO): Observable<IPassenger> {
        return this._clientProxyUser.send(PassengerMSG.CREATE, passengerDTO)
    }

    @Get()
    findAll(): Observable<IPassenger[]> {
        return this._clientProxyUser.send(PassengerMSG.FIND_ALL, '')
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<IPassenger> {
        return this._clientProxyUser.send(PassengerMSG.FIND_ONE, id)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() passengerDTO: PassengerDTO): Observable<IPassenger> {
        return this._clientProxyUser.send(PassengerMSG.UPDATE, { id, passengerDTO })
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<any> {
        return this._clientProxyUser.send(PassengerMSG.DELETE, id)
    }
}
