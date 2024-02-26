
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
  return (
    <header className={`${styles['header']}`}>
      <div className="container mx-auto flex items-center justify-between py-6">
        <svg className={`${styles['header__logo']}`} viewBox="0 0 1215 306">
          <use href="#logo-multicolor"></use>
        </svg>
        <ul className={`${styles['header__menu']}`}>
          {navigation.map((item, index) => (
            <li key={`item-key-${index}`}>
              <Link href={item.href} title={item.name}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default HeaderSection