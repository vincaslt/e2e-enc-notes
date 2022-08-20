import { useContext } from 'react'
import { UserContext } from '~/modules/user/UserProvider'
import { createPassphrase, decrypt } from '~/utils/encryption'
import storage from '~/utils/localStorage'

const PASSPHRASE_STORAGE_KEY = 'passphrase'

function useUser() {
  const userContextState = useContext(UserContext)

  if (!userContextState) {
    throw new Error('useUser must be used within a UserProvider')
  }

  const { passphrase, setPassphrase } = userContextState

  const isLoggedIn = !!passphrase

  const login = async (password: string) => {
    const encryptedPassphrase = storage.get<string | undefined>(
      PASSPHRASE_STORAGE_KEY
    )
    if (!encryptedPassphrase) {
      const { encrypted, passphrase } = await createPassphrase(password)
      storage.set(PASSPHRASE_STORAGE_KEY, encrypted)
      setPassphrase(passphrase)
    } else {
      const decryptedPassphrase = decrypt(encryptedPassphrase, password)
      if (decryptedPassphrase) {
        setPassphrase(decryptedPassphrase)
      }
    }
  }

  return {
    passphrase,
    isLoggedIn,
    login,
  }
}

export default useUser
