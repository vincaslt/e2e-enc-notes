import { Editor } from '@tiptap/react'
import styles from './TextEditor.module.css'
import { FaBold, FaItalic } from 'react-icons/fa'
import ToolbarButton from '~/components/TextEditor/ToolbarButton'

interface Props {
  editor: Editor | null
}

function Toolbar({ editor }: Props) {
  if (!editor) {
    return null
  }

  return (
    <div className={styles.toolbar}>
      <ToolbarButton
        title="Bold"
        icon={<FaBold />}
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive('bold')}
      />
      <ToolbarButton
        title="Italic"
        icon={<FaItalic />}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive('italic')}
      />
    </div>
  )
}

export default Toolbar
