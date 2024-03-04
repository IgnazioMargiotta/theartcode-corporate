import styles from './customers-section.module.scss'
import Image from 'next/image'

// Components
import {FadeInAnimation} from '@theartcode/components'

export const CustomersSection = () => {
  return (
    <section className={`${styles['customers']} py-[4rem] md:py-[8rem]`} id="services">
      <div className="container mx-auto text-center">
        <div className="text-center pb-16">
          <FadeInAnimation delay={0}>
            <h2 className="pb-4"><span>We work with</span></h2>
          </FadeInAnimation>
          <FadeInAnimation delay={5}>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
          </FadeInAnimation>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FadeInAnimation delay={5}>
          <div className={`${styles['customers-box']}`}>
              <Image src={`assets/images/icon_rocket.svg`} className={`${styles['customers-box__image']}`} width={130} height={130} alt='startUp' />
             <h3>startUp</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          </FadeInAnimation>
          <div className={`${styles['customers-box']} ${styles['customers-box--focus']}`}>
            <FadeInAnimation delay={5}>
              <Image src={`assets/images/icon_building.svg`} className={`${styles['customers-box__image']}`} width={130} height={130} alt='piccole/medie imprese' />
            </FadeInAnimation>
            <FadeInAnimation delay={5}>
              <h3>piccole/medie imprese</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </FadeInAnimation>
          </div>
          <div className={`${styles['customers-box']}`}>
            <FadeInAnimation delay={5}>
              <Image src={`assets/images/icon_palace.svg`} className={`${styles['customers-box__image']}`} width={130} height={130} alt='multinazionali' />
            </FadeInAnimation>
            <FadeInAnimation delay={5}>
              <h3>multinazionali</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </FadeInAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomersSection