import { CacheStoreFactory } from '@nestjs/cache-manager';

export interface CacheManagerOption {
  store?: string | CacheStoreFactory | CacheStorage;
  ttl?: number;
  max?: number;
  isConfigured?: (value: any) => boolean;
}
