import Sidebar from '~/components/Sidebar'
import TextEditor from '~/components/TextEditor'
import styles from './NotesPage.module.css'

function NotesPage() {
  return (
    <div className={styles.pageContainer}>
      <Sidebar.Root>
        <Sidebar.Item>Item 1</Sidebar.Item>
        <Sidebar.Item>Item 2</Sidebar.Item>
      </Sidebar.Root>

      <div className={styles.editorContainer}>
        <TextEditor />
      </div>
    </div>
  )
}

export default NotesPage
