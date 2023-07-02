import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { UserResponse } from '../dto/user.response.dto';
import { CarResponse } from '../dto/car.response.dto';

@Injectable()
export class MicroService {
  constructor(private httpService: HttpService) {}
  async getUserById(id: string): Promise<UserResponse> {
    const { data } = await this.httpService.axiosRef.get<UserResponse>(
      `http://localhost:4000/users/${id}`,
    );
    return data;
  }

  async getCarById(id: string): Promise<CarResponse> {
    const { data } = await this.httpService.axiosRef.get<CarResponse>(
      `http://localhost:3500/users/${id}`,
    );
    return data;
  }
}
