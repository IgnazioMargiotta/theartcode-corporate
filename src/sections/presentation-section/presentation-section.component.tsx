import { Button, } from "@theartcode/components"
import styles from './presentation-section.module.scss'
import Image from 'next/image';

export const PresentationSection = () => {
  return (
    <section className={`${styles['presentation']}`}>
      <div className="container mx-auto py-16 text-center">
        <div className={`${styles['presentation-container']}`}>
          <h1>&#123;&nbsp;Where&nbsp;<span className="text-color-main1">art</span> meets&nbsp;<span className="text-color-main2">code</span>&nbsp;&#125;</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className={`${styles['buttons']}`}>
            <Button link="#" text="Scopri come lavoriamo" style="ghost" color="main1" />
            <Button link="#" text="Parlaci del progetto" style="fill" color="main2" />
          </div>
        </div>
      </div>
      <Image src={`assets/images/arrow_bottom.svg`} className={`${styles['presentation__arrow']}`} width={35} height={75} alt='' />
    </section>
  )
}

export default PresentationSection