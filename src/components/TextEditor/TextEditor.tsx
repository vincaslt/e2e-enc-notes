import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from '~/components/TextEditor/Toolbar'
import styles from './TextEditor.module.css'

function TextEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World!</p>',
    editorProps: {
      attributes: {
        class: styles.textEditor,
      },
    },
  })

  return (
    <div className={styles.textEditorContainer}>
      <Toolbar editor={editor} />
      <EditorContent className={styles.textEditorContent} editor={editor} />
    </div>
  )
}

export default TextEditor
