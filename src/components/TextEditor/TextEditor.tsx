import {
  Content,
  EditorContent,
  generateText,
  JSONContent,
  useEditor,
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from '~/components/TextEditor/Toolbar'
import styles from './TextEditor.module.css'

const extensions = [StarterKit]

interface Props {
  editorId: string // unique id to recreate the editor when it changes (e.g. note id)
  content: Content | null
  isSaving: boolean
  onChange: (content: JSONContent, title?: string) => void
}

function TextEditor({ editorId, content, onChange, isSaving }: Props) {
  const editor = useEditor(
    {
      extensions,
      content,
      editorProps: {
        attributes: {
          class: styles.textEditor,
        },
      },
      onUpdate: ({ editor }) => {
        const editorContent = editor.getJSON()
        const firstNodeContent = editorContent.content?.[0]
        onChange(
          editorContent,
          firstNodeContent && generateText(firstNodeContent, extensions)
        )
      },
    },
    [editorId]
  )

  return (
    <div className={styles.textEditorContainer}>
      <Toolbar editor={editor} isSaving={isSaving} />
      <EditorContent className={styles.textEditorContent} editor={editor} />
    </div>
  )
}

export default TextEditor
