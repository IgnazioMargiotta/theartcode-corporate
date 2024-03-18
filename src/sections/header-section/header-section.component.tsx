import { useState, useEffect, useCallback } from "react";
import { SocialBox } from "@theartcode/components";
import styles from "./header-section.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@theartcode/contexts/ThemeContext";

export const HeaderSection = ({ lang }: any) => {
  const { theme, toggleTheme } = useTheme();

  const defaultLang = lang.defaultLang === "it" ? "it" : "";

  const navigation = [
    {
      name: lang.navigation.itemZero,
      href: `${defaultLang}/#solutions`,
      current: false,
    },
    {
      name: lang.navigation.itemOne,
      href: `${defaultLang}/#technology`,
      current: false,
    },
    {
      name: lang.navigation.itemTwo,
      href: `${defaultLang}/#services`,
      current: false,
    },
    {
      name: lang.navigation.itemThree,
      href: `${defaultLang}/#last-articles`,
      current: false,
    },
    {
      name: lang.navigation.itemFour,
      href: `${defaultLang}/#contacts`,
      current: false,
    },
  ];

  const [open, setOpen] = useState(false);
  const [isHeaderSticky, setHeaderSticky] = useState(false);
  const [buttonClass, setButtonClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      setHeaderSticky(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const newButtonClass =
      theme === "dark"
        ? styles["header__switch-theme--dark"]
        : styles["header__switch-theme--light"];
    setButtonClass(newButtonClass);
  }, [theme]);

  const handleDarkMode = () => {
    toggleTheme();
  };

  return (
    <header
      className={`${styles["header"]} ${isHeaderSticky ? styles["header--sticky"] : ""}`}
    >
      <div className={`container mx-auto ${styles["header-container"]}`}>
        <Link href={`/${defaultLang}`} title="Vibra Studio">
          <Image
            src={`assets/images/logo_vibra_gradient.svg`}
            className={`${styles["header__logo"]}`}
            width={200}
            height={75}
            alt="Vibra Studio"
          />
        </Link>
        <nav
          className={`${styles["header__menu"]} ${open ? styles["header__menu--open"] : ""}`}
        >
          <ul>
            {navigation.map((item, index) => (
              <li
                className={`${styles["header__items"]}`}
                key={`item-key-${index}`}
              >
                <Link
                  href={item.href}
                  title={item.name}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      setOpen(!open);
                    }
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li
              className={`${styles["header__social"]} ${styles[lang.socialClass]}`}
            >
              <SocialBox size="small" />
            </li>
            <li className={`${styles["header__switch"]}`}>
              <Link
                href={lang.langSwitch.link}
                title={lang.langSwitch.text}
                className={`${styles["header__switch-lang"]} ${styles[lang.langSwitch.class]}`}
                aria-label={lang.langSwitch.text}
              ></Link>
              <button
                className={`${styles["header__switch-theme"]} ${styles[lang.themeSwitch.class]} ${buttonClass}`}
                onClick={handleDarkMode}
                aria-label={lang.themeSwitch.text}
                title={lang.themeSwitch.text}
              ></button>
            </li>
          </ul>
          <button
            className={`${styles["header__icon-hambuger"]}`}
            aria-label={lang.hamburgerAriaLabel}
            onClick={() => setOpen(!open)}
          >
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="25" />
              <path
                className={`${styles["line1"]}`}
                d="M0 40h62c13 0 6 28-4 18L35 35"
              />
              <path className={`${styles["line2"]}`} d="M0 50h70" />
              <path
                className={`${styles["line3"]}`}
                d="M0 60h62c13 0 6-28-4-18L35 65"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};
export default HeaderSection;
