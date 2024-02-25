import { Svg } from "@theartcode/components"
import styles from './footer-section.module.scss'

export const FooterSection = () => {
  return (
    <footer className={`${styles['footer']}`}>
        <div className="container mx-auto flex flex-col md:flex-row gap-4 py-8">
          <div className="md:w-1/6 flex items-center justify-center md:justify-start">
            <svg className={`${styles['footer__logo']}`} viewBox="0 0 1215 306">
              <use href="#logo"></use>
            </svg>
          </div>
          <div className="md:w-4/6 flex items-center justify-center">
            <div className="text-center">
              artCode - Via Fausto Coppi, 8/a 43122 Parma - P.IVA 02949510347 <a href="#" target="_blank" title="Privacy Policy">Privacy&nbsp;Policy</a>
            </div>
          </div>
          <div className="md:w-1/6 flex items-center justify-center md:justify-end">
              <div className={`${styles['social']}`}>
                <a href="#" target="_blank" title="Instagram" className={`${styles['social__instagram']}`}>
                  <svg viewBox="0 0 30 30">
                    <use href="#instagram"></use>
                  </svg>
                </a> 
                <a href="#" target="_blank" title="LinkedIn" className={`${styles['social__linkedin']}`}>
                  <svg viewBox="0 0 26 26">
                    <use href="#linkedin"></use>
                  </svg>
                </a>
            </div>
          </div>
        </div>
      <Svg />
    </footer>
  )
}

export default FooterSection