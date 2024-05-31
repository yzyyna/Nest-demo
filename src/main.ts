import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
var express = require("express");

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // bodyParser: false,
    // rawBody: true,
  });
  // app.use(express.raw());
  // app.use(express.urlencoded({ extended: false }));
  await app.listen(3000);
}
bootstrap();
