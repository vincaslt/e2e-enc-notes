import { JSONContent } from '@tiptap/react'
import { useEffect, useMemo, useState } from 'react'
import { AiOutlinePlus, AiOutlineSave } from 'react-icons/ai'
import Sidebar from '~/components/Sidebar'
import TextEditor from '~/components/TextEditor'
import useNotes from '~/modules/notes/useNotes'
import styles from './NotesPage.module.css'

function NotesPage() {
  const { loadNotes, notes, createNote, updateNote, saveNote } = useNotes()
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null)

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

  const activeNote = activeNoteId ? notes[activeNoteId] : null

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

  const handleSaveNote = () => {
    if (activeNote) {
      saveNote(activeNote)
    }
  }

  return (
    <>
      <Sidebar.Root>
        <Sidebar.Button onClick={handleCreateNewNote}>
          <AiOutlinePlus /> New note
        </Sidebar.Button>
        <Sidebar.Button onClick={handleSaveNote}>
          <AiOutlineSave /> Save
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
            editorId={activeNote.id}
            onChange={handleChangeNoteContent}
            content={activeNote.content}
          />
        ) : (
          <button onClick={handleCreateNewNote}>Create new</button>
        )}
      </div>
    </>
  )
}

export default NotesPage
