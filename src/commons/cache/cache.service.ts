import { CACHE_MANAGER, Cache } from "@nestjs/cache-manager";
import { Inject } from "@nestjs/common";

export default class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async SET(key: string, value: any, ttl?: number | 100) {
    const json = JSON.stringify(value);
    await this.cacheManager.set(key, json, ttl);
  }

  async GET(key: string) {
    const json = await this.cacheManager.get(key) as string;
    return JSON.parse(json);
  }

  async DEL(key: string) {
    await this.cacheManager.del(key);
  }

}
