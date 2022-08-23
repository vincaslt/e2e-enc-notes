import cuid from 'cuid'
import { useCallback, useMemo, useState } from 'react'
import useEncryptedNotesStorage from '~/modules/notes/useEncryptedNotesStorage'
import { Note } from '~/types/Notes'

function useNotes() {
  const persistence = useEncryptedNotesStorage()
  const [notes, setNotes] = useState(() => persistence.loadNotes())

  const saveNote = useCallback(
    (note: Omit<Note, 'updatedAt'>) => {
      const updatedNote = persistence.saveNote(note)
      console.log('save', updatedNote)
      setNotes((notes) => ({
        ...notes,
        [updatedNote.id]: updatedNote,
      }))
    },
    [persistence]
  )

  const updateNote = useCallback((note: Omit<Note, 'updatedAt'>) => {
    setNotes((notes) => ({
      ...notes,
      [note.id]: {
        ...note,
        updatedAt: new Date().toISOString(),
      },
    }))
  }, [])

  const createNote = useCallback(
    ({ ...note }: Omit<Note, 'id' | 'updatedAt'>) => {
      const newNote = {
        ...note,
        id: cuid(),
        updatedAt: new Date().toISOString(),
      }
      setNotes((notes) => ({
        ...notes,
        [newNote.id]: newNote,
      }))
      return newNote
    },
    []
  )

  return useMemo(
    () => ({
      notes,
      updateNote,
      saveNote,
      createNote,
    }),
    [createNote, notes, saveNote, updateNote]
  )
}

export default useNotes
