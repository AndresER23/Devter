import Image from 'next/image'
import styles from './styles.module.css'
const Avatar = ({ src, alt, text, withText }) => {
  return (
    <>
    <div>
      <Image className={styles.avatar} src={src} alt={alt} width={49} height={49}/>
      {withText && <strong>{alt || text}</strong>}
    </div>
    </>
  )
}

export default Avatar
