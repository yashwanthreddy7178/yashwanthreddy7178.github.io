import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

export async function rateLimit(ip: string) {
  const key = `ratelimit:${ip}`
  const limit = 5 // requests
  const duration = 3600 // 1 hour in seconds

  const requests = await redis.incr(key)
  if (requests === 1) {
    await redis.expire(key, duration)
  }

  const remaining = Math.max(0, limit - requests)
  const reset = await redis.ttl(key)

  return {
    success: requests <= limit,
    remaining,
    reset: Math.ceil(reset / 60) // convert to minutes
  }
} 