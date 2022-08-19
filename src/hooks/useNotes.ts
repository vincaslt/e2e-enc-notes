import cuid from 'cuid'
import { useCallback, useState } from 'react'
import { Note } from '~/types/Notes'
import storage from '~/utils/localStorage'

const STORAGE_KEY = 'notes'

// TODO: auto-save

function useNotes() {
  const [notes, setNotes] = useState<Record<string, Note>>({})

  const loadNotes = useCallback(() => {
    const notes = storage.get<Record<string, Note>>(STORAGE_KEY, {})
    setNotes(notes)
  }, [])

  const saveNote = useCallback(
    ({ id = cuid(), ...note }: Omit<Note, 'updatedAt'>) => {
      storage.set(`${STORAGE_KEY}:${id}`, {
        ...note,
        updatedAt: new Date().toISOString(),
      })
      storage.set(STORAGE_KEY, Object.keys(notes))
    },
    [notes]
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

  return {
    notes,
    updateNote,
    loadNotes,
    saveNote,
    createNote,
  }
}

export default useNotes
