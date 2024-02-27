import styles from './services-section.module.scss'
import { Button, DecorativeBubbles } from "@theartcode/components"
import Image from 'next/image';

export const ServicesSection = () => {
  return (
    <section className={`${styles['services']}`}>
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <div className={`${styles['services-box']}`}>
                <Image src={`assets/images/icon_think.svg`} className={`${styles['services-box__image']}`} width={100} height={100} alt='' />
                <div className={`${styles['services-box__info']}`}>
                  <h4>Lorem ipsum dolor sit amet</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className={`${styles['services-box']}`}>
                <Image src={`assets/images/icon_think.svg`} className={`${styles['services-box__image']}`} width={100} height={100} alt='' />
                <div className={`${styles['services-box__info']}`}>
                  <h4>Lorem ipsum dolor sit amet</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className={`${styles['services-box']}`}>
                <Image src={`assets/images/icon_think.svg`} className={`${styles['services-box__image']}`} width={100} height={100} alt='' />
                <div className={`${styles['services-box__info']}`}>
                  <h4>Lorem ipsum dolor sit amet</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className={`${styles['services-box']}`}>
                <Image src={`assets/images/icon_think.svg`} className={`${styles['services-box__image']}`} width={100} height={100} alt='' />
                <div className={`${styles['services-box__info']}`}>
                  <h4>Lorem ipsum dolor sit amet</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
            <div className={`order-first lg:order-last ${styles['services-content']}`}>
              <DecorativeBubbles direction="left" position="top-left" animation="true" />
              <div>
                <h2>Lorem ipsum dolor</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Button link="#" text="Esplora il lato artistico" style="fill" color="main2" />
              </div>
              <DecorativeBubbles direction="right" position="bottom-right" animation="true" />
            </div>
          </div>
        </div>
    </section>
  )
}

export default ServicesSection