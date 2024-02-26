import styles from './button.module.scss'
import Link from 'next/link'

interface ButtonProps {
  link: string,
  text: string,
  target?: '_self' | '_blank',
  style?: 'fill' | 'ghost',
  color?: 'main1' | 'main2'
}

export const Button = ({ link, text, target = '_self', style = 'fill', color = 'main1' } : ButtonProps) => {
  return (
    <div>
      <Link className={`${styles['button']} ${styles[`button--${style}`]} ${styles[`button--${color}`]}`} href={link} target={target} title={text}>{text}</Link>
    </div>
  )
}

export default Button;