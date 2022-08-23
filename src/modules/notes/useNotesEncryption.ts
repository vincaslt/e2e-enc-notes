import { useCallback, useMemo } from 'react'
import { useUser } from '~/modules/user'
import { Note } from '~/types/Notes'
import { decrypt, encrypt } from '~/utils/encryption'

function useNotesEncryption() {
  const { passphrase } = useUser()

  const encryptNote = useCallback(
    (note: Note) => {
      return encrypt(JSON.stringify(note), passphrase)
    },
    [passphrase]
  )

  const decryptNote = useCallback(
    (encryptedNote: string) => {
      const note = decrypt(encryptedNote, passphrase)
      return note ? JSON.parse(note) : null
    },
    [passphrase]
  )

  return useMemo(
    () => ({
      encryptNote,
      decryptNote,
    }),
    [decryptNote, encryptNote]
  )
}

export default useNotesEncryption
