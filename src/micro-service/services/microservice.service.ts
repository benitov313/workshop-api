import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { UserResponse } from '../dto/user.response.dto';

@Injectable()
export class MicroService {
  constructor(private httpService: HttpService) {}
  async getUserById(id: string): Promise<UserResponse> {
    const { data } = await this.httpService.axiosRef.get<UserResponse>(
      `http://localhost:4000/users/${id}`,
    );
    return data;
  }

  getCarByiD(id: number) {
    return `This action returns a #${id} http`;
  }
}
