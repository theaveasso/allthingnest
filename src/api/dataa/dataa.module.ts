import { Module } from "@nestjs/common";
import DataaController from "./dataa.controller";
import DataaService from "./dataa.service";
import CacheService from "src/commons/cache/cache.service";

@Module({
  imports: [],
  controllers: [DataaController],
  providers: [DataaService, CacheService],
})
export default class DataaModule {}
