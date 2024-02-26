import styles from './customers-section.module.scss'
import Image from 'next/image';

export const CustomersSection = () => {
  return (
    <section className={`${styles['customers']}`}>
      <div className="container mx-auto text-center py-12">
        <h2 className="pb-16">Lorem ipsum dolor sit amet<br /> consectetur adipiscing.</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className={`${styles['customers-box']}`}>
            <Image src={`assets/images/icon_rocket.svg`} className={`${styles['customers-box__image']}`} width={130} height={130} alt='startUp' />
            <h3>startUp</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className={`${styles['customers-box']}`}>
            <Image src={`assets/images/icon_building.svg`} className={`${styles['customers-box__image']}`} width={130} height={130} alt='piccole/medie imprese' />
            <h3>piccole/medie imprese</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className={`${styles['customers-box']}`}>
            <Image src={`assets/images/icon_palace.svg`} className={`${styles['customers-box__image']}`} width={130} height={130} alt='multinazionali' />
            <h3>multinazionali</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomersSection