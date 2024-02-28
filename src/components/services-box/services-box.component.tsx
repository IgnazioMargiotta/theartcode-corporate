import styles from './services-box.module.scss'
import Image from 'next/image';

interface ServicesProps {
  icon?: string
  title?: string,
  description?: string,
}

export const ServicesBox = ({ icon, title = 'Lorem ipsum dolor sit amet', description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' } : ServicesProps) => {
  return (
    <div className={`${styles['services-box']}`}>
      {icon && <Image src={`/assets/images/${icon}`} className={`${styles['services-box__image']}`} width={100} height={100} alt={title} />}
      <div className={`${styles['services-box__info']}`}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ServicesBox;