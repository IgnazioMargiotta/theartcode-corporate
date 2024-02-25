import styles from './skills-box.module.scss'
import Image from 'next/image';

interface SkillsBoxProps {
  boxActive: boolean,
  color?: string,
  title?: string,
  icon?: string
}

export const SkillsBox = ({ title, icon, color, boxActive } : SkillsBoxProps) => {
  return (
    <div className={`${styles['skills__box']} ${boxActive ? '' : styles['skills__box--empty']} ${color ? styles[`skills__box--${color}`] : ''}`}>
      {boxActive && <Image src={`/skills-icon/${icon}`} width={60} height={60} alt={title ? title : ''} />}
      {boxActive && <span className={`${styles['skills__title']}`}>{title ? title : ''}</span>}
    </div>
  )
}

export default SkillsBox;