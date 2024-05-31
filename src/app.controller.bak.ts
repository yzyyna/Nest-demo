import {
  Body,
  Controller,
  Get,
  Header,
  Post,
  Query,
  Req,
} from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("users")
  getUsers(@Query("a") a: string): Services.User[] {
    console.log("%c ~ name ccc ~ ", "color:#2ecc71", a);
    return this.appService.getUsers(a);
  }
  @Post("users")
  editUser(@Body() a) {
    // editUser(@Req() a) {
    console.log("%c ~ a ?? ~ ", "color:#2ecc71", a);
    return this.appService.editUser(a);
  }
}
