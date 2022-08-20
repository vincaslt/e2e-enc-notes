import { useCallback, useMemo } from 'react'
import { useUser } from '~/modules/user'
import { Note } from '~/types/Notes'
import { decrypt, encrypt } from '~/utils/encryption'

function useNotesEncryption() {
  const { passphrase } = useUser()

  const encryptNote = useCallback(
    async (note: Note) => {
      return encrypt(JSON.stringify(note), passphrase)
    },
    [passphrase]
  )

  const decryptNote = useCallback(
    async (encryptedNote: string): Promise<Note> => {
      const note = decrypt(encryptedNote, passphrase)
      if (!note) {
        throw new Error("Couldn't decrypt note")
      }
      return JSON.parse(note)
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
