import AppLayout from 'components/AppLayout'
import { useState, useEffect } from 'react'
import Devit from '@c/Devit'

export default function HomePage () {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch('/api/statuses/home_timeline')
      .then((res) => res.json())
      .then(setTimeline)
  }, [])
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
          border-bottom: 1px solid #ccc;
          height: 49px;
          display: flex;
          position: sticky;
          top: 0;
          width: 100%;
        }

        h2 {
          font-size: 21px;
          font-weight: 800;
        }

        section {
          padding-top: 10px;
        }

        nav {
          border-top: 1px solid #ccc;
          height: 49px;
          position: absolute;
          bottom: 0;
          width: 100%;
        }
      `}</style>
    </>
  )
}
