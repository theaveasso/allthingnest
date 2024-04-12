import { Module } from '@nestjs/common';
import CacheModule from './commons/cache/cache.module';
import ConfigModule from './commons/config/config.module';
import DataaModule from './api/dataa/dataa.module';

@Module({
  imports: [ConfigModule, CacheModule, DataaModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
