import styles from './services-section.module.scss'
import { DecorativeBubbles, FadeInAnimation, ServicesBox } from "@theartcode/components"
import Image from 'next/image';

export const ServicesSection = ({lang}:any) => {
  const { cards } = lang
  return (
    <section className={`${styles['services']} py-[4rem] md:py-[8rem]`} id="services">
      <div className={`${styles['decoration-square']}`}>
        <div></div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className={`${styles['services-box-container']}`}>
            <FadeInAnimation delay={0}>
              <ServicesBox icon="icon_developer.svg" title={cards.softwareDev.title} description={cards.softwareDev.description} />
            </FadeInAnimation>
            <FadeInAnimation delay={0}>
              <ServicesBox icon="icon_database.svg" title={cards.itStrategic.title} description={cards.itStrategic.description} />
            </FadeInAnimation>
            <FadeInAnimation delay={0}>
              <ServicesBox icon="icon_network.svg" title={cards.webDev.title} description={cards.webDev.description} />
            </FadeInAnimation>
          </div>
          <div className={`${styles['services-content']}`}>
            <DecorativeBubbles direction="left" position="top-left" animation="true" />
            <div>
              <h2>{lang.title}</h2>
              <p>{lang.subtitle}</p>
            </div>
            <DecorativeBubbles direction="right" position="bottom-right" animation="true" />
          </div>
          <FadeInAnimation delay={0}>
            <ServicesBox icon="icon_app.svg" title={cards.appsDev.title} description={cards.appsDev.description} />
          </FadeInAnimation>
          <FadeInAnimation delay={0}>
            <ServicesBox icon="icon_think.svg" title={cards.projectProductManagment.title} description={cards.projectProductManagment.description} />
          </FadeInAnimation>
          <FadeInAnimation delay={0}>
            <ServicesBox icon="icon_cloud.svg" title={cards.couldServices.title} description={cards.couldServices.description} />
          </FadeInAnimation>
          <FadeInAnimation delay={0}>
            <ServicesBox icon="icon_architecture.svg" title={cards.infrastructureArchitecture.title} description={cards.infrastructureArchitecture.description} />
          </FadeInAnimation>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection