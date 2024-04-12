import { Global, Module } from "@nestjs/common";
import { CacheModule as CS } from "@nestjs/cache-manager";
import { RedisOptions } from "src/config/options/redis.option";

@Global()
@Module({
  imports: [
    CS.registerAsync(RedisOptions)
  ],
  providers: [],
  exports: []
})
export default class CacheModule {}
