import { Svg, SocialBox } from "@theartcode/components"
import styles from './footer-section.module.scss'
import Image from 'next/image'

export const FooterSection = () => {
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
      <Svg />
    </footer>
  )
}

export default FooterSection