import { AES, enc } from 'crypto-js'
import { cryptoRandomStringAsync } from 'crypto-random-string'

export const encrypt = (message: string, passphrase: string) => {
  return AES.encrypt(message, passphrase).toString()
}

export const decrypt = (encryptedMessage: string, passphrase: string) => {
  return AES.decrypt(encryptedMessage, passphrase).toString(enc.Utf8)
}

export const createPassphrase = async (password: string) => {
  const passphrase = await cryptoRandomStringAsync({ length: 32 })
  const encrypted = encrypt(passphrase, password)
  return { encrypted, passphrase }
}
