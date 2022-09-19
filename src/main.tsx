import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '~/App'
import { UserProvider } from '~/modules/user'
import '~/styles/global.module.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
)
