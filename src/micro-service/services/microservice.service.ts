import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { UserResponse } from '../dto/user.response.dto';
import { CarResponse } from '../dto/car.response.dto';

@Injectable()
export class MicroService {
  constructor(private httpService: HttpService) {}

  async getUserById(id: string): Promise<UserResponse> {
    const URL = `http://users-service:3000/users/${id}`;
    const { data } = await this.httpService.axiosRef.get<UserResponse>(URL);
    return data;
  }

  async getCarById(id: number): Promise<CarResponse> {
    const URL = `http://car-service:8080/cars/${id}`;
    const { data } = await this.httpService.axiosRef.get<CarResponse>(URL);
    return data;
  }
}
