import { HeaderCompact, Intro } from "@theartcode/components"
import styles from './header-section.module.scss'

export const HeaderSection = () => {
  return (
    <div className={`${styles['header-section']}`}>
      <HeaderCompact />
      <Intro />
    </div>
  )
}

export default HeaderSection