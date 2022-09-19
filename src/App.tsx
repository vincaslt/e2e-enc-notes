import { Route } from 'wouter'
import { useUser } from '~/modules/user'
import LoginPage from '~/pages/LoginPage'
import NotesPage from '~/pages/NotesPage'
import styles from './App.module.css'

function App() {
  const { isLoggedIn } = useUser()

  return (
    <div className={styles.appContainer}>
      {isLoggedIn ? (
        <Route path="/" component={NotesPage} />
      ) : (
        <Route path="/" component={LoginPage} />
      )}
    </div>
  )
}

export default App
