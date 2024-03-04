import styles from './customers-section.module.scss'
import Image from 'next/image'

// Components
import {FadeInAnimation} from '@theartcode/components'

export const CustomersSection = ({lang}:any) => {
  
  return (
    <section className={`${styles['customers']} py-[4rem] md:py-[8rem]`} id="customers">
      <div className="container mx-auto text-center">
        <div className="text-center pb-16">
          <FadeInAnimation delay={0}>
            <h2 className="pb-4"><span className={`decoration-title`}>{lang.title}</span></h2>
          </FadeInAnimation>
          <FadeInAnimation delay={0}>
            <p>{lang.subtitle}</p>
          </FadeInAnimation>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FadeInAnimation delay={0}>
          <div className={`${styles['customers-box']}`}>
              <Image src={`assets/images/icon_rocket.svg`} className={`${styles['customers-box__image']}`} width={130} height={130} alt='startUp' />
             <h3>{lang.leftCard.title}</h3>
              <p>{lang.leftCard.subtitle}</p>
          </div>
          </FadeInAnimation>
          <FadeInAnimation delay={0}>
          <div className={`${styles['customers-box']} ${styles['customers-box--focus']}`}>
              <Image src={`assets/images/icon_building.svg`} className={`${styles['customers-box__image']}`} width={130} height={130} alt='piccole/medie imprese' />
              <h3>{lang.centerCard.title}</h3>
              <p>{lang.centerCard.subtitle}</p>
          </div>
          </FadeInAnimation>
          <FadeInAnimation delay={0}>
          <div className={`${styles['customers-box']}`}>
              <Image src={`assets/images/icon_palace.svg`} className={`${styles['customers-box__image']}`} width={130} height={130} alt='multinazionali' />
              <h3>{lang.rightCard.title}</h3>
              <p>{lang.rightCard.subtitle}</p>
          </div>
          </FadeInAnimation>
        </div>
      </div>
    </section>
  )
}

export default CustomersSection