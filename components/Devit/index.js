import Avatar from '@c/Avatar'

const Devit = ({ avatar, username, message, id }) => {
  return (
    <>
      <article>
        <div>
        <Avatar alt={username} src={avatar} />
        </div>
        <section>
          <strong>{username}</strong>
          <p>{message}</p>
        </section>
      </article>
    <style jsx>{`
      div{
        padding-right:10px;
      }
      article {
            display:flex;
            padding: 10px 15px;
          }
      p{
        margin: 0;
      }
      `}</style>
    </>
  )
}

export default Devit
