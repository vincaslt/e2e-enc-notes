import { JSONContent } from '@tiptap/react'
import { useMemo, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Message from '~/components/Message/Message'
import Sidebar from '~/components/Sidebar'
import TextEditor from '~/components/TextEditor'
import useNotes from '~/modules/notes/useNotes'
import useDebounce from '~/modules/useDebounce'
import styles from './NotesPage.module.css'

function NotesPage() {
  const { notes, createNote, updateNote, saveNote } = useNotes()

  const [activeNoteId, setActiveNoteId] = useState<string | null>(null)

  const activeNote = activeNoteId ? notes[activeNoteId] : null

  const [
    debouncedSaveNote,
    { flushAndReset: flushDebouncedSaveNote, ...saveStates },
  ] = useDebounce(saveNote)

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
      const updatedNote = { id: activeNote.id, title, content }
      updateNote(updatedNote)
      debouncedSaveNote(updatedNote)
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
    flushDebouncedSaveNote()
    setActiveNoteId(id)
  }

  const getNoteSaveStatus = () => {
    if (saveStates.isPending) {
      return 'pending'
    }
    if (saveStates.isExecuted) {
      return 'saved'
    }
    return 'none'
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
            saveStatus={getNoteSaveStatus()}
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
