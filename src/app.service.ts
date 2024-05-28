import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello NestJS???!";
  }
  getUsers(): Services.User[] {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push({ name: "name" + i, index: i });
    }

    return arr;
  }
}
