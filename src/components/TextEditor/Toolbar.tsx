import { Editor } from '@tiptap/react'
import styles from './TextEditor.module.css'
import ToolbarButton from '~/components/TextEditor/ToolbarButton'
import { AiOutlineBold, AiOutlineItalic } from 'react-icons/ai'

interface Props {
  editor: Editor | null
  saveStatus: 'none' | 'pending' | 'saved'
}

function Toolbar({ editor, saveStatus }: Props) {
  return (
    <div className={styles.toolbar}>
      <div className={styles.toolbarActions}>
        <ToolbarButton
          title="Bold"
          icon={<AiOutlineBold />}
          onClick={() => editor?.chain().focus().toggleBold().run()}
          isActive={editor?.isActive('bold')}
        />
        <ToolbarButton
          title="Italic"
          icon={<AiOutlineItalic />}
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          isActive={editor?.isActive('italic')}
        />
      </div>
      {saveStatus === 'pending' && 'Unsaved changes...'}
      {saveStatus === 'saved' && 'Saved!'}
    </div>
  )
}

export default Toolbar
