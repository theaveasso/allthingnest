import { Global, Module } from "@nestjs/common";
import { ConfigModule as CM, ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    CM.forRoot({
      envFilePath: '.env',
    })
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export default class ConfigModule {}
