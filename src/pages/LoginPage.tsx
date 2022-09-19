import { ChangeEvent, FormEvent, useState } from 'react'
import Form from '~/components/Form'
import Message from '~/components/Message/Message'
import PageLayout from '~/layouts/PageLayout'
import { useUser } from '~/modules/user'
import styles from './LoginPage.module.css'

function LoginPage() {
  const { login } = useUser()
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await login(password)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value
    if (password) {
      setPassword(password)
    }
  }

  return (
    <PageLayout>
      <div className={styles.centeredContainer}>
        <form className={styles.loginContainer} onSubmit={handleSubmit}>
          <Message>
            Your password will be used to encrypt and decrypt your notes.
          </Message>
          <Form.Control>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Input
              onChange={handlePasswordChange}
              id="password"
              type="password"
            />
          </Form.Control>
          <div>
            <Form.Button type="submit">Decrypt</Form.Button>
          </div>
        </form>
      </div>
    </PageLayout>
  )
}

export default LoginPage
