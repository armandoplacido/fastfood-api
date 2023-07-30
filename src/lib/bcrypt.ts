import { compare, hash } from 'bcryptjs'

import { env } from '@/core/env'

export default class BCryptEncrypter {
  static compare(password: string, hashedPassword: string): Promise<boolean> {
    return compare(password, hashedPassword)
  }

  static generate(password: string): Promise<string> {
    const saltRounds = env.SALT
    return hash(password, saltRounds)
  }
}
