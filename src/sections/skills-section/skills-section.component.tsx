import { SkillsBox, DecorativeBubbles } from "@theartcode/components"
import Image from 'next/image';

// Styles
import styles from './skills-section.module.scss'

export const SkillsSection = () => {
  return (
    <section className={`${styles['skills']}`}>
       <div className="container mx-auto">
        <div className={`${styles['skills-row-box']}`}>
          <SkillsBox boxActive={true} color="variant1" title="PHP" icon="skills_php.svg" />
          <SkillsBox boxActive={true} color="variant1" title="Laravel" icon="skills_laravel.svg" />
          <SkillsBox boxActive={true} color="variant1" title="WordPress" icon="skills_wordpress.svg" />
          <SkillsBox boxActive={true} color="variant1" title="Symfony" icon="skills_symfony.svg" />
          <SkillsBox boxActive={true} color="variant1" title="Prestashop" icon="skills_prestashop.svg" />
          <SkillsBox boxActive={true} color="variant1" title="Magento" icon="skills_magento.svg" />
          <SkillsBox boxActive={false} />
          <SkillsBox boxActive={false} />
          <SkillsBox boxActive={false} />
          <SkillsBox boxActive={true} color="variant2" title="HTML5" icon="skills_html5.svg" />
          <SkillsBox boxActive={true} color="variant2" title="CSS3" icon="skills_css3.svg" />
          <SkillsBox boxActive={true} color="variant2" title="Javascript" icon="skills_javascript.svg" />
          <SkillsBox boxActive={false} />
          <SkillsBox boxActive={true} color="variant3" title="MySQL" icon="skills_mysql.svg" />
          <SkillsBox boxActive={true} color="variant3" title="Mongo DB" icon="skills_mongodb.svg" />
          <SkillsBox boxActive={false} />
        </div>
      </div>
      <div className={`${styles['skills-row-logo']}`}>
        <div className={`${styles['skills-container-logo']}`}>
          <DecorativeBubbles direction="left" position="top-left" />
          <svg className={`${styles['skills__logo']}`} viewBox="0 0 1215 306">
            <use href="#logo"></use>
          </svg>
          <Image src={`assets/images/line_variant1.svg`} className={`${styles['skills__line-decoration']} ${styles['skills__line-decoration--variant1']}`} width={90} height={310} alt='' />
          <Image src={`assets/images/line_variant2.svg`} className={`${styles['skills__line-decoration']} ${styles['skills__line-decoration--variant2']}`} width={200} height={135} alt='' />
          <Image src={`assets/images/line_variant3.svg`} className={`${styles['skills__line-decoration']} ${styles['skills__line-decoration--variant3']}`} width={300} height={130} alt='' />
          <Image src={`assets/images/line_variant4.svg`} className={`${styles['skills__line-decoration']} ${styles['skills__line-decoration--variant4']}`} width={190} height={170} alt='' />
          <Image src={`assets/images/line_variant5.svg`} className={`${styles['skills__line-decoration']} ${styles['skills__line-decoration--variant5']}`} width={285} height={320} alt='' />
          <DecorativeBubbles direction="right" position="bottom-right" />
        </div>
      </div>
      <div className="container mx-auto">
        <div className={`${styles['skills-row-box']}`}>
            <SkillsBox boxActive={false} />
            <SkillsBox boxActive={false} />
            <SkillsBox boxActive={false} />
            <SkillsBox boxActive={true} color="variant4" title="Node JS" icon="skills_nodejs.svg" />
            <SkillsBox boxActive={true} color="variant4" title="Strapi" icon="skills_strapi.svg" />
            <SkillsBox boxActive={true} color="variant4" title="React JS" icon="skills_reactjs.svg" />
            <SkillsBox boxActive={true} color="variant4" title="Angular JS" icon="skills_angularjs.svg" />
            <SkillsBox boxActive={true} color="variant4" title="Next JS" icon="skills_nextjs.svg" />
            <SkillsBox boxActive={true} color="variant5" title="G Cloud" icon="skills_gcloud.svg" />
            <SkillsBox boxActive={true} color="variant5" title="Vercel" icon="skills_vercel.svg" />
            <SkillsBox boxActive={true} color="variant5" title="AWS Service" icon="skills_awsservice.svg" />
            <SkillsBox boxActive={true} color="variant5" title="DIG. Ocean" icon="skills_digocean.svg" />
            <SkillsBox boxActive={true} color="variant5" title="Host Linux" icon="skills_hostlinux.svg" />
            <SkillsBox boxActive={false} />
            <SkillsBox boxActive={false} />
            <SkillsBox boxActive={false} />
        </div>
      </div>
    </section>
  )
}

export default SkillsSection