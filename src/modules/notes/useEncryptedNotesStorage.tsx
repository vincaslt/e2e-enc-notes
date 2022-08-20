import { useCallback, useMemo } from 'react'
import useNotesEncryption from '~/modules/notes/useNotesEncryption'
import { Note } from '~/types/Notes'
import storage from '~/utils/localStorage'

const DEFAULT_STORAGE_KEY = 'notes'

interface Params {
  storageKey?: string
}

function useEncryptedNotesStorage({
  storageKey = DEFAULT_STORAGE_KEY,
}: Params = {}) {
  const encryption = useNotesEncryption()

  const loadNotes = useCallback(async (): Promise<Record<string, Note>> => {
    const noteIds = storage.get<string[]>(storageKey, [])
    const notes: Record<string, Note> = {}
    noteIds.forEach(async (id) => {
      const note = storage.get(`${storageKey}:${id}`, '')
      const decryptedNote = await encryption.decryptNote(note)
      notes[decryptedNote.id] = decryptedNote
    })
    return notes
  }, [encryption, storageKey])

  const saveNote = useCallback(
    async (note: Omit<Note, 'updatedAt'>): Promise<Note> => {
      // Update the note updatedAt date and persist into local storage
      const updatedNote = {
        ...note,
        updatedAt: new Date().toISOString(),
      }
      const encryptedNote = await encryption.encryptNote(updatedNote)
      storage.set(`${storageKey}:${updatedNote.id}`, encryptedNote)

      // Update the list of existing notes
      const noteIds = storage.get<string[]>(storageKey, [])
      const noteIdsWithoutNote = noteIds.filter((id) => id !== note.id)
      storage.set(storageKey, [...noteIdsWithoutNote, note.id])
      return updatedNote
    },
    [encryption, storageKey]
  )

  return useMemo(
    () => ({
      loadNotes,
      saveNote,
    }),
    [loadNotes, saveNote]
  )
}

export default useEncryptedNotesStorage
