import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello NestJS???!";
  }
  getUsers(name: string): Services.User[] {
    console.log("%c ~ getUsers name ~ ", "color:#2ecc71", name);
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push({ name: "name" + i, index: i });
    }
    arr.unshift({ name: name, index: 999 });

    return arr;
  }
  editUser(form) {
    console.log("%c ~ editUser name ~ ", "color:#2ecc71", form);
    return form;
  }
  getInOut() {
    return "hh??";
  }
}
