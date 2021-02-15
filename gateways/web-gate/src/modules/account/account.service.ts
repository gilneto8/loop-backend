import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import ApiAdapter from '../../internals/api/api';

@Injectable()
export class AccountService {
  constructor(private api: ApiAdapter) {}

  async get(id: number): Promise<any> {
    try {
      return await this.api.get(`http://localhost:3000/accounts/${id}`, {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiY3JlYXRlZEF0IjoiMjAyMS0wMi0xM1QyMDoyODowMS4yNjhaIiwidXBkYXRlZEF0IjoiMjAyMS0wMi0xM1QyMDoyODowMS4yNjhaIiwiZW1haWwiOiJnaWxAbWFpbC5jb20iLCJuYW1lIjoiR2lsIiwiZGV0YWlscyI6ImhhaGEgbsOjbyBzZWkgeEQiLCJpYXQiOjE2MTM0MjA2NjMsImV4cCI6MTYxMzQzNTA2M30.au-1flz3tQzTyDfxJjc6CIg8YjPmIBxfYsPr-7AcW4U',
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
