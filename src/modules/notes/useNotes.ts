import cuid from 'cuid'
import { useCallback, useMemo, useState } from 'react'
import useEncryptedNotesStorage from '~/modules/notes/useEncryptedNotesStorage'
import { Note } from '~/types/Notes'

// TODO: auto-save

function useNotes() {
  const persistence = useEncryptedNotesStorage()
  const [notes, setNotes] = useState<Record<string, Note>>({})

  const loadNotes = useCallback(async () => {
    const notes = await persistence.loadNotes()
    setNotes(notes)
  }, [persistence])

  const saveNote = useCallback(
    async (note: Omit<Note, 'updatedAt'>) => {
      const updatedNote = await persistence.saveNote(note)
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
      loadNotes,
      saveNote,
      createNote,
    }),
    [createNote, loadNotes, notes, saveNote, updateNote]
  )
}

export default useNotes
