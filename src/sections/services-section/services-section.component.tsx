import styles from './services-section.module.scss'
import { Button, DecorativeBubbles, ServicesBox } from "@theartcode/components"
import Image from 'next/image';

export const ServicesSection = () => {
  return (
    <section className={`${styles['services']}`}>
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className={`${styles['services-box-container']}`}>
            <ServicesBox icon="icon_developer.svg" title="Software Development" description="Software su misura: dal concetto al codice, soluzioni software che fanno la differenza." />
            <ServicesBox icon="icon_database.svg" title="IT Strategic Consulting" description="Strategie IT che spingono l'innovazione e catalizzano la crescita aziendale." />
            <ServicesBox icon="icon_network.svg" title="Web Development" description="Siti web dinamici per un'esperienza utente ottimale e conversioni elevate." />
          </div>
          <div className={`${styles['services-content']}`}>
            <DecorativeBubbles direction="left" position="top-left" animation="true" />
            <div>
              <h2>Lorem ipsum dolor</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <Button link="#" text="Esplora il lato artistico" style="fill" color="main2" />
            </div>
            <DecorativeBubbles direction="right" position="bottom-right" animation="true" />
          </div>
          <ServicesBox icon="icon_app.svg" title="Apps Development" description="App mobile intuitive, performanti per connettere brand e utenti ovunque." />
          <ServicesBox icon="icon_think.svg" title="Project & Product Management" description="Trasformiamo idee in successi digitali con gestione di elite." />
          <ServicesBox icon="icon_cloud.svg" title="Cloud Services" description="Soluzioni cloud scalabili per efficienza, sicurezza e performance ottimali." />
          <ServicesBox icon="icon_architecture.svg" title="Infrastructure Architecture" description="Costruisci sul solido: architetture per il futuro dell'IT aziendale." />
        </div>
      </div>
    </section>
  )
}

export default ServicesSection