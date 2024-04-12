import { Injectable } from "@nestjs/common";
import CacheService from "src/commons/cache/cache.service";
import { CreateDataaDto } from "./dto/create-dataa.dto";

@Injectable()
export default class DataaService {
  constructor(
    private cacheService: CacheService
  ) {}

  async getDataa() {
    try {
      const value = await this.cacheService.GET('dataa')
      return value
    } catch (error) {
      throw error
    }
  }

  async postDataa(body: CreateDataaDto) {
    try {
      await this.cacheService.SET('dataa', body.dataa)
    } catch (error) {
      throw error
    }
  }

  async deleteDataa() {
    try {
      await this.cacheService.DEL('dataa')
    } catch (error) {
      throw error
    }
  }
}
