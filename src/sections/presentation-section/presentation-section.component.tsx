import { Button } from "@theartcode/components"
import styles from './presentation-section.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export const PresentationSection = () => {
  return (
    <section className={`${styles['presentation']} py-[11rem] mb-[4rem] md:mb-[8rem]`}>
      <div className={`${styles['static-bubbles']}`}></div>
      <div className="container mx-auto text-center z-1">
        <div className={`${styles['presentation-container']}`}>
          <h1>Where&nbsp;<span className="text-color-main1">art</span> meets&nbsp;<span className="text-color-main2">code</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className={`${styles['buttons']}`}>
            <Button link="#services" text="Services" style="ghost" color="main1" />
            <Button link="#contacts" text="Let's talk" style="fill" color="main2" />
          </div>
        </div>
      </div>
      <Link className={`${styles['presentation__arrow']}`} href="#services">
        <Image src={`assets/images/arrow_bottom.svg`}  width={35} height={75} alt='Down' />
      </Link>
      <div className={`${styles['rotation-bubbles']}`}>
        <div>
          <div className={`${styles['rotation-bubbles__single']}`}></div>
          <div className={`${styles['rotation-bubbles__single']}`}></div>
          <div className={`${styles['rotation-bubbles__single']}`}></div>
        </div>
      </div>
    </section>
  )
}

export default PresentationSection