import {
  Controller,
  Get,
  Header,
  Query,
  Req,
  Post,
  UseInterceptors,
  UploadedFiles,
  Body,
} from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
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
  @UseInterceptors(FilesInterceptor("file", 3))
  async uploadFormData(
    @UploadedFiles() files,
    @Body() body: { name: string; b: string }
  ) {
    console.log("Files:", files);
    console.log("Body:", body);
  }
}
