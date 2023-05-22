import AppLayout from '@c/AppLayout'
import Button from '@c/Button'

const ComposeTweet = () => {
  return (
    <>
      <AppLayout>
        <form>
          <textarea placeholder="¿Qué esta pasando?"></textarea>
          <div>
            <Button>Devitear</Button>
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
