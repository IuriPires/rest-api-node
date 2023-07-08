import 'dotenv/config'

import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string(),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('production'),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('⚠ Invalid environment variables:', _env.error.format())

  throw new Error('Invalid environment variables')
}

export default _env.data
