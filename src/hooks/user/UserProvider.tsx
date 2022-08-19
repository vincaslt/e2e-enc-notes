import { createContext, ReactNode, useState } from 'react'

interface UserContextState {
  passphrase: string
  setPassphrase: (passphrase: string) => void
}

export const UserContext = createContext<UserContextState | null>(null)

interface Props {
  children: ReactNode
}

export const UserProvider = ({ children }: Props) => {
  // TODO: decrypt passphrase in local storage and store in context
  const [passphrase, setPassphrase] = useState<string>('')

  return (
    <UserContext.Provider
      value={{
        passphrase,
        setPassphrase,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
