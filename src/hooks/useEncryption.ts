import encUtf8 from 'crypto-js/enc-utf8'
import AES from 'crypto-js/aes'

function useEncryption() {
  const encrypt = () => {
    AES.encrypt('secret message', 'password').toString()
  }

  const decrypt = () => {
    AES.decrypt('encrypted message', 'password').toString(encUtf8)
  }

  return { encrypt, decrypt }
}

export default useEncryption
