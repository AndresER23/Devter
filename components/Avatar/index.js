import Image from 'next/image'
import styles from './styles.module.css'
const Avatar = ({ src, alt, text, withText }) => {
  return (
    <>
    <div className={styles.container}>
      <Image className={styles.avatar} src={src} alt={alt} width={49} height={49}/>
      {text && <strong>{text}</strong>}
    </div>
    </>
  )
}

export default Avatar
