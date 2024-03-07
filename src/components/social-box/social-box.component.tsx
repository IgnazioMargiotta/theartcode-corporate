import styles from './social-box.module.scss'
import Link from 'next/link'

interface SocialBoxProps {
  size: 'small' | 'medium' | 'large',
}

export const SocialBox = ({ size = 'medium' } : SocialBoxProps) => {
  return (
    <div className={`${styles['social']}`} data-size={size}>
      <Link className={`${styles['social__instagram']}`} href="https://www.instagram.com/theart.code/" target="_blank" title="Instagram">
        <svg viewBox="0 0 30 30">
          <use href="#social-instagram"></use>
        </svg>
      </Link>
      <Link className={`${styles['social__linkedin']}`} href="https://www.linkedin.com/company/vibra-studio/" target="_blank" title="LinkedIn">
        <svg viewBox="0 0 26 26">
          <use href="#social-linkedin"></use>
        </svg>
      </Link>
    </div>
  )
}

export default SocialBox;