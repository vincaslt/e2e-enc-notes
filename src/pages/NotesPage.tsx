import { JSONContent } from '@tiptap/react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Message from '~/components/Message/Message'
import Sidebar from '~/components/Sidebar'
import TextEditor from '~/components/TextEditor'
import useNotes from '~/modules/notes/useNotes'
import useAutosave from '~/modules/useAutosave'
import { Note } from '~/types/Notes'
import styles from './NotesPage.module.css'

function NotesPage() {
  const { loadNotes, notes, createNote, updateNote, saveNote } = useNotes()

  const [activeNoteId, setActiveNoteId] = useState<string | null>(null)

  const activeNote = activeNoteId ? notes[activeNoteId] : null

  const handleSaveNote = useCallback(
    async (note: Note | null) => {
      if (note) {
        saveNote(note)
      }
    },
    [saveNote]
  )

  const { isSaving } = useAutosave({
    save: handleSaveNote,
    watch: activeNote,
    getId: (note) => note?.id,
    ignoreInitial: true,
  })

  useEffect(() => {
    loadNotes()
  }, [loadNotes])

  const notesList = useMemo(
    () =>
      Object.values(notes).sort((a, b) => {
        const dateA = new Date(a.updatedAt)
        const dateB = new Date(b.updatedAt)
        return dateB.getTime() - dateA.getTime()
      }),
    [notes]
  )

  const handleChangeNoteContent = (
    content: JSONContent,
    title = 'New note'
  ) => {
    if (activeNote) {
      updateNote({ id: activeNote.id, title, content })
    }
  }

  const handleCreateNewNote = () => {
    const newNote = createNote({
      title: 'New note',
      content: `<h1>New note</h1>`,
    })
    setActiveNoteId(newNote.id)
  }

  const handleChangeActiveNote = (id: string) => {
    setActiveNoteId(id)
  }

  return (
    <>
      <Sidebar.Root>
        <Sidebar.Button onClick={handleCreateNewNote}>
          <AiOutlinePlus /> New note
        </Sidebar.Button>
        <Sidebar.List>
          {notesList.map((note) => (
            <Sidebar.Item
              key={note.id}
              isActive={note.id === activeNoteId}
              onClick={() => handleChangeActiveNote(note.id)}
            >
              {note.title}
            </Sidebar.Item>
          ))}
        </Sidebar.List>
      </Sidebar.Root>

      <div className={styles.editorContainer}>
        {activeNote ? (
          <TextEditor
            isSaving={isSaving}
            editorId={activeNote.id}
            onChange={handleChangeNoteContent}
            content={activeNote.content}
          />
        ) : (
          <div className={styles.emptyEditor}>
            <Message title="No note selected">
              Create a new note or select an existing one.
            </Message>
          </div>
        )}
      </div>
    </>
  )
}

export default NotesPage
