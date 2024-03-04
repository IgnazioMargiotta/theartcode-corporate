import { useState, useEffect } from 'react'
import { Svg, SocialBox } from "@theartcode/components"
import styles from './footer-section.module.scss'
import Image from 'next/image'

export const FooterSection = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Puoi personalizzare la soglia a tuo piacimento
      const scrollThreshold = 500;

      setShowScrollButton(scrollTop > scrollThreshold);
    };

    // Aggiungi l'ascoltatore dell'evento di scroll
    window.addEventListener('scroll', handleScroll);

    // Pulisci l'ascoltatore dell'evento quando il componente viene smontato
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Assicurati di aggiungere tutte le dipendenze necessarie

  const handleScrollTop = () => {
    // Esegui lo scroll verso l'alto
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${styles['footer']}`}>
      <div className="container mx-auto flex flex-col md:flex-row gap-4 py-8">
        <div className="md:w-1/6 flex items-center justify-center md:justify-start">
          <Image src={`assets/images/logo_vibra_black.svg`} className={`${styles['footer__logo']}`} width={200} height={75} alt='vibra' />
        </div>
        <div className="md:w-4/6 flex items-center justify-center">
          <div className="text-center">
            artCode - Via Fausto Coppi, 8/a 43122 Parma - P.IVA&nbsp;02949510347 <a href="#" target="_blank" title="Privacy Policy">Privacy&nbsp;Policy</a>
          </div>
        </div>
        <div className="md:w-1/6 flex items-center justify-center md:justify-end">
          <SocialBox size="medium" />
        </div>
      </div>
      <button className={`${styles['scrollButton']} ${showScrollButton ? styles['scrollButton--active'] : ''}`} onClick={handleScrollTop}>
        <svg viewBox="0 0 20 20">
          <use href="#arrow-double-top"></use>
        </svg>
      </button>
      <Svg />
    </footer>
  )
}

export default FooterSection