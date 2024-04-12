import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import DataaService from './dataa.service';
import { CreateDataaDto } from './dto/create-dataa.dto';

@Controller("/dataa")
export default class DataaController {
  constructor(private dataaService: DataaService) {}

  @Get()
  async getDataa() {
    try {
      return await this.dataaService.getDataa();
    } catch (error) {
    }
  }

  @Post()
  async postDataa(@Body() body: CreateDataaDto) {
    try {
      return await this.dataaService.postDataa(body);
    } catch (error) {
    }
  }

  @Delete()
  async deleteDataa() {
    try {
    } catch (error) {
    }
  }
}
