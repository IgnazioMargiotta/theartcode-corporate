import { useState, useEffect } from 'react'
import { SocialBox } from "@theartcode/components"
import styles from './header-section.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Technology', href: '/#technology', current: false },
  { name: 'Services', href: '/#services', current: false },
  { name: 'Blog', href: '/#last-articles', current: false },
  { name: 'Contacts', href: '/#contacts', current: false },
];

export const HeaderSection = () => {
  const [open, setOpen] = useState(false);
  const [isHeaderSticky, setHeaderSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      setHeaderSticky(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles['header']} ${isHeaderSticky ? styles['header--sticky'] : ''}`}>
      <div className={`container mx-auto ${styles['header-container']}`}>
        <Link href="/">
          <Image src={`assets/images/logo_vibra_gradient.svg`} className={`${styles['header__logo']}`} width={200} height={75} alt='' />
        </Link>
        <nav className={`${styles['header__menu']} ${open ? styles['header__menu--open'] : ''}`}>
          <ul>
            {navigation.map((item, index) => (
              <li className={`${styles['header__items']}`}  key={`item-key-${index}`}>
                <Link href={item.href} title={item.name} onClick={() => {if (window.innerWidth < 768) {setOpen(!open)}}}>
                  {item.name}
                </Link>
              </li>
            ))}
            <li className={`${styles['header__social']} ${styles['header__social--eng']}`}>
              <SocialBox size="small" />
            </li>
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
  );
};

export default HeaderSection;