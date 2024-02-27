import { useState } from 'react';
import styles from './header-section.module.scss'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '#', current: false },
  { name: 'Come lavoriamo', href: '#', current: false },
  { name: 'Progetti', href: '#', current: false },
  { name: 'Contattaci', href: '#', current: false },
  { name: 'BLOG', href: '#', current: false },
]

export const HeaderSection = () => {

  const [ open, setOpen ] = useState(false)

  return (
    <header className={`${styles['header']}`}>
      <div className="container min-h-[100px] mx-auto flex items-center justify-center sm:justify-between py-6">
        <svg className={`${styles['header__logo']}`} viewBox="0 0 1215 306">
          <use href="#logo-multicolor"></use>
        </svg>
        <nav className={`${styles['header__menu']} ${open ? styles['header__menu--open'] : ''}`}>
          <ul>
            {navigation.map((item, index) => (
              <li key={`item-key-${index}`}>
                <Link href={item.href} title={item.name}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <button className={`${styles['header__icon-hambuger']}`} aria-label="Apri navigazione" onClick={() => setOpen(!open)}>
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="25" />
              <path className={`${styles['line1']}`} d="M0 40h62c13 0 6 28-4 18L35 35" />
              <path className={`${styles['line2']}`} d="M0 50h70" />
              <path className={`${styles['line3']}`} d="M0 60h62c13 0 6-28-4-18L35 65" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default HeaderSection