import AppLayout from '@c/AppLayout'
import Button from '@c/Button'
import useUser from 'Hooks/useUser'
import { useState } from 'react'
import { addDevit } from 'fbase/client'
import { useRouter } from 'next/router'
const COMPOSE_STATUS = {
  USER_NOT_KNOW: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1
}

const ComposeTweet = () => {
  const user = useUser()
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(COMPOSE_STATUS.USER_NOT_KNOW)
  const router = useRouter()

  const handleChange = (event) => {
    const { value } = event.target
    setMessage(value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus(COMPOSE_STATUS.LOADING)
    addDevit({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.username
    })
      .then(() => {
        router.push('/home')
      })
      .catch(err => {
        console.log(err)
        setStatus(COMPOSE_STATUS.ERROR)
      })
  }

  const isButtonDisabled = !message.length && COMPOSE_STATUS.LOADING

  return (
    <>
      <AppLayout>
        <form onSubmit={handleSubmit}>
          <textarea onChange={handleChange} placeholder="¿Qué esta pasando?" value={message}></textarea>
          <div>
            <Button disabled={isButtonDisabled}>Devitear</Button>
          </div>
        </form>
      </AppLayout>
      <style jsx>{`
    textarea{
      border: 0;
      font-size: 21px;
      min-height: 200px;
      padding: 15px; 
      resize: none;
      width: 100%;
      outline: 0;
    }
    `}</style>
    </>
  )
}

export default ComposeTweet
