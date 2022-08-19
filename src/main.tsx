import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserProvider } from '~/hooks/user'
import Router from '~/Router'
import '~/styles/global.module.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <Router />
    </UserProvider>
  </React.StrictMode>
)
