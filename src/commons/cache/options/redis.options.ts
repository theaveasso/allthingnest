import { CacheModuleAsyncOptions } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-store';

export const RedisOptions: CacheModuleAsyncOptions = {
  isGlobal: true,
  imports: [ConfigModule],
  useFactory: async (confService: ConfigService) => {
    const store = await redisStore({
      socket: {
        host: confService.get('REDIS_HOST'),
        port: parseInt(confService.get('REDIS_PORT')),
      },
    });
    return {
      store: () => store,
    };
  },
  inject: [ConfigService],
};
