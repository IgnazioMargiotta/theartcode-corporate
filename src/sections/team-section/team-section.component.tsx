import * as marked from 'marked'
import styles from "./team-section.module.scss";
import Image from "next/image";
import {
  FadeInAnimation,
} from "@theartcode/components";

export const TeamSection = ({ lang }: any) => {

  const subtitle = marked.parse(lang.subtitle);

  return (
    <section className={`${styles["team"]} my-[4rem] py-[4rem]`} id="team">
      <FadeInAnimation>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-8">
            <div className={`${styles["team__title"]} sm:col-span-2 text-center lg:text-left`}>
              <svg viewBox="0 0 20 22">
                <use href="#finger-print"></use>
              </svg>
              <h2 className="pb-4">{lang.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: subtitle }} />
            </div>
            <div className={`${styles["single-user__container"]}`}>
              <div className={`${styles["single-user__image"]}`}>
                <Image
                  src={`/assets/images/profile-team/ignazio_margiotta.webp`}
                  width={250}
                  height={250}
                  alt="Ignazio Margiotta"
                />
              </div>
              <div className={`${styles["single-user__content"]}`}>
                <div className={`${styles["single-user__decoration"]}`}>
                  <svg viewBox="0 0 20 22">
                    <use href="#finger-print"></use>
                  </svg>
                </div>
                <h4 className={`${styles["single-user__name"]}`}>Ignazio Margiotta</h4>
                Tech Lead & Founder
              </div>
            </div>
            <div className={`${styles["single-user__container"]}`}>
              <div className={`${styles["single-user__image"]}`}>
                <Image
                  src={`/assets/images/profile-team/samuele_neri.webp`}
                  width={250}
                  height={250}
                  alt="Samuele Neri"
                />
              </div>
              <div className={`${styles["single-user__content"]}`}>
                <div className={`${styles["single-user__decoration"]}`}>
                  <svg viewBox="0 0 20 22">
                    <use href="#finger-print"></use>
                  </svg>
                </div>
                <h4 className={`${styles["single-user__name"]}`}>Samuele Neri</h4>
                Software Developer
              </div>
            </div>
            <div className={`${styles["single-user__container"]}`}>
              <div className={`${styles["single-user__image"]}`}>
                <Image
                  src={`/assets/images/profile-team/daniel_diletto.webp`}
                  width={250}
                  height={250}
                  alt="Daniel Diletto"
                />
              </div>
              <div className={`${styles["single-user__content"]}`}>
                <div className={`${styles["single-user__decoration"]}`}>
                  <svg viewBox="0 0 20 22">
                    <use href="#finger-print"></use>
                  </svg>
                </div>
                <h4 className={`${styles["single-user__name"]}`}>Daniel Diletto</h4>
                Software Developer
              </div>
            </div>
            <div className={`${styles["single-user__container"]}`}>
              <div className={`${styles["single-user__image"]}`}>
                <Image
                  src={`/assets/images/profile-team/simone_schiaffonati.webp`}
                  width={250}
                  height={250}
                  alt="Simone Schiaffonati"
                />
              </div>
              <div className={`${styles["single-user__content"]}`}>
                <div className={`${styles["single-user__decoration"]}`}>
                  <svg viewBox="0 0 20 22">
                    <use href="#finger-print"></use>
                  </svg>
                </div>
                <h4 className={`${styles["single-user__name"]}`}>Simone Schiaffonati</h4>
                Junior Software Developer
              </div>
            </div>
            <div className={`${styles["single-user__container"]}`}>
              <div className={`${styles["single-user__image"]}`}>
                <Image
                  src={`/assets/images/profile-team/danilo_scopece.webp`}
                  width={250}
                  height={250}
                  alt="Danilo Scopece"
                />
              </div>
              <div className={`${styles["single-user__content"]}`}>
                <div className={`${styles["single-user__decoration"]}`}>
                  <svg viewBox="0 0 20 22">
                    <use href="#finger-print"></use>
                  </svg>
                </div>
                <h4 className={`${styles["single-user__name"]}`}>Danilo Scopece</h4>
                Visual Designer
              </div>
            </div>
          </div>
        </div>
      </FadeInAnimation>
    </section>
  );
};

export default TeamSection;
