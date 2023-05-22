import AppLayout from 'components/AppLayout'
import { useState, useEffect } from 'react'
import Devit from '@c/Devit'
import useUser from 'Hooks/useUser'
export default function HomePage () {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user &&
      fetch('/api/statuses/home_timeline')
        .then((res) => res.json())
        .then(setTimeline)
  }, [user])
  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline &&
            timeline.map((devit) => {
              return (
                <Devit
                key={devit.id}
                username={devit.username}
                message={devit.message}
                id={devit.id}
                avatar={devit.avatar}
                />
              )
            })}
        </section>
        <nav></nav>
      </AppLayout>
      <style jsx>{`
        header {
          align-items: center;
          border-bottom: 1px solid #eee;
          height: 49px;
          display: flex;
          position: sticky;
          top: 0;
          width: 100%;
          background:#ffffffee;
          backdrop-filter: blur(5px);
        }

        h2 {
          font-size: 21px;
          font-weight: 800;
          padding-left: 15px;
        }

        nav {
          background : #fff;
          border-top: 1px solid #ccc;
          height: 49px;
          position: sticky;
          bottom: 0;
          width: 100%;
        }
      `}</style>
    </>
  )
}
