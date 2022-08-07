import NotesPage from '~/pages/NotesPage'
import styles from './App.module.css'

/**
 * Acts as an entry point for the application.
 */
function App() {
  return (
    <div className={styles.appContainer}>
      <NotesPage />
    </div>
  )
}

export default App
