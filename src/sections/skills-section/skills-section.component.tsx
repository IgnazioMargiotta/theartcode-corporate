import { SkillsBox, DecorativeBubbles } from "@theartcode/components"
import Image from 'next/image';

// Styles
import styles from './skills-section.module.scss'

export const SkillsSection = () => {
  return (
    <section className={`${styles['skills']}`}>
       <div className="container mx-auto">
        <div className={`${styles['skills-rowbox']}`}>
          <SkillsBox boxActive={true} color="blue" title="PHP" icon="skills_php.svg" />
          <SkillsBox boxActive={true} color="blue" title="Laravel" icon="skills_laravel.svg" />
          <SkillsBox boxActive={true} color="blue" title="WordPress" icon="skills_wordpress.svg" />
          <SkillsBox boxActive={true} color="blue" title="Symfony" icon="skills_symfony.svg" />
          <SkillsBox boxActive={true} color="blue" title="Prestashop" icon="skills_prestashop.svg" />
          <SkillsBox boxActive={true} color="blue" title="Magento" icon="skills_magento.svg" />
          <SkillsBox boxActive={false} />
          <SkillsBox boxActive={false} />
          <SkillsBox boxActive={true} color="green" title="HTML5" icon="skills_html5.svg" />
          <SkillsBox boxActive={true} color="green" title="CSS3" icon="skills_CSS3.svg" />
          <SkillsBox boxActive={true} color="green" title="Javascript" icon="skills_javascript.svg" />
          <SkillsBox boxActive={false} />
          <SkillsBox boxActive={true} color="violet" title="MySQL" icon="skills_mysql.svg" />
          <SkillsBox boxActive={true} color="violet" title="Mongo DB" icon="skills_mongodb.svg" />
        </div>
      </div>
      <div className={`${styles['skills-rowlogo']}`}>
        <div className={`${styles['skills-containerlogo']}`}>
          <DecorativeBubbles direction="left" position="top-left" />
          <Image src={`logo.svg`} className={`${styles['skills__logo']}`} width={300} height={90} alt='artCode' />
          <Image src={`line_violet.svg`} className={`${styles['skills__linedecoration']} ${styles['skills__linedecoration--violet']}`} width={300} height={130} alt='' />
          <Image src={`line_blue.svg`} className={`${styles['skills__linedecoration']} ${styles['skills__linedecoration--blue']}`} width={90} height={310} alt='' />
          <Image src={`line_green.svg`} className={`${styles['skills__linedecoration']} ${styles['skills__linedecoration--green']}`} width={200} height={135} alt='' />
          <Image src={`line_purple.svg`} className={`${styles['skills__linedecoration']} ${styles['skills__linedecoration--purple']}`} width={200} height={185} alt='' />
          <Image src={`line_orange.svg`} className={`${styles['skills__linedecoration']} ${styles['skills__linedecoration--orange']}`} width={285} height={320} alt='' />
          <DecorativeBubbles direction="right" position="bottom-right" />
        </div>
      </div>
      <div className="container mx-auto">
        <div className={`${styles['skills-rowbox']}`}>
            <SkillsBox boxActive={false} />
            <SkillsBox boxActive={false} />
            <SkillsBox boxActive={false} />
            <SkillsBox boxActive={true} color="purple" title="Node JS" icon="skills_nodejs.svg" />
            <SkillsBox boxActive={true} color="purple" title="Strapi" icon="skills_strapi.svg" />
            <SkillsBox boxActive={true} color="purple" title="React JS" icon="skills_reactjs.svg" />
            <SkillsBox boxActive={true} color="purple" title="Angular JS" icon="skills_angularjs.svg" />
            <SkillsBox boxActive={true} color="purple" title="Next JS" icon="skills_nextjs.svg" />
            <SkillsBox boxActive={true} color="orange" title="G Cloud" icon="skills_gcloud.svg" />
            <SkillsBox boxActive={true} color="orange" title="Vercel" icon="skills_vercel.svg" />
            <SkillsBox boxActive={true} color="orange" title="AWS Service" icon="skills_awsservice.svg" />
            <SkillsBox boxActive={true} color="orange" title="DIG. Ocean" icon="skills_digocean.svg" />
            <SkillsBox boxActive={true} color="orange" title="Host Linux" icon="skills_hostlinux.svg" />
            <SkillsBox boxActive={false} />
            <SkillsBox boxActive={false} />
            <SkillsBox boxActive={false} />
        </div>
      </div>
    </section>
  )
}

export default SkillsSection