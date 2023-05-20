import Link from 'next/link'
import AppLayout from '../../components/AppLayout'

const Timeline = () => {
  return (
    <>
      <AppLayout>
        <h1>This is the timeline</h1>
        <Link href="/">Go Home</Link>
      </AppLayout>
      <style jsx>
        {`
          h1 {
            color: red;
          }
        `}
      </style>
    </>
  )
}

export default Timeline
