import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFiles,
  Body,
} from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import { MulterModule } from "@nestjs/platform-express";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
