import { MainContactForm, DecorativeBubbles } from "@theartcode/components"
import styles from './contacts-section.module.scss'

export const ContactsSection = ({lang}:any) => {
  return (
    <section className={`${styles['contacts']} pt-[4rem] md:pt-[8rem] pb-[0rem] sm:pb-[8rem]`} id="contacts">
      <div className="container mx-auto text-center pb-16">
        <h2 className="pb-4"><span className={`decoration-title`}>{lang.title}</span></h2>
        <p>{lang.subtitle}</p>
      </div>
      <MainContactForm lang={lang.form}/>
    </section>
  )
}

export default ContactsSection