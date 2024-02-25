import Image from 'next/image';

// Styles
import styles from './footer-section.module.scss'

export const FooterSection = () => {
  return (
    <div className={`${styles['footer']}`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 flex items-center justify-center">
          <svg viewBox="0 0 1215 306">
            <use href="#logo"></use>
          </svg>
        </div>
        <div className="bg-gray-300 p-4 flex items-center justify-center">
          <div className="text-center">
            artCode - Via Fausto Coppi, 8/a 43122 Parma - P.IVA 02949510347 <a href="#" target="_blank" title="Privacy Policy">Privacy Policy</a>
          </div>
        </div>
        <div className="bg-gray-400 p-4 flex items-center justify-center">
            <div className={`${styles['socialBoxed']}`}>
              <a href="#" target="_blank" title="Instagram" className={`${styles['socialBoxed__instagram']}`}>
                <svg viewBox="0 0 30 30">
                  <use href="#instagram"></use>
                </svg>
              </a> 
              <a href="#" target="_blank" title="LinkedIn" className={`${styles['socialBoxed__linkedin']}`}>
                <svg viewBox="0 0 26 26">
                  <use href="#linkedin"></use>
                </svg>
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSection