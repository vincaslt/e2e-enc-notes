import NotesPage from '~/pages/NotesPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '~/App'
import PageLayout from '~/layouts/PageLayout'
import LoginPage from '~/pages/LoginPage'
import { useUser } from '~/modules/user'

function Router() {
  const { isLoggedIn } = useUser()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route element={<PageLayout />}>
            {isLoggedIn ? (
              <Route index element={<NotesPage />} />
            ) : (
              <Route index element={<LoginPage />} />
            )}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
