import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
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
    <EditorContent className={styles.textEditorContainer} editor={editor} />
  )
}

export default TextEditor
