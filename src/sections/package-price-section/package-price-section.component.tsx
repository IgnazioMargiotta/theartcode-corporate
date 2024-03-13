import styles from "./package-price-section.module.scss";

import { Button, FadeInAnimation } from "@theartcode/components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const PackagePriceSection = ({ lang }: any) => {

  const { init, sectionOne, sectionTwo } = lang

  const breakpoints = {
    320: {
      slidesPerView: 1.2,
    },
    420: {
      slidesPerView: 1.3,
    },
    600: {
      slidesPerView: 1.8,
    },
    760: {
      slidesPerView: 2.2,
    },
    860: {
      slidesPerView: 2.7,
    },
    1130: {
      slidesPerView: 3.2,
    },
    1500: {
      slidesPerView: 3,
    },
  };

  return (
    <section className={`${styles["package-price"]} pt-[4rem] mt-[4rem]`}>
      <div className="container mx-auto">
        <div className="pb-12">
          <FadeInAnimation>
            <h2 className="pb-4">{sectionOne.title}</h2>
            <p>{sectionOne.subtitle}</p>
          </FadeInAnimation>
        </div>
      </div>
      <div className={`container mx-auto px-0`}>
        <FadeInAnimation>
          <Swiper
            breakpoints={breakpoints}
            centeredSlides={false}
            spaceBetween={30}
            grabCursor={true}
            className={`${styles["package-price-row"]}`}
            wrapperClass={`swiper-wrapper ${styles["swiper-wrapper-card"]}`}
          >
            <SwiperSlide className={styles["package-price-slide"]}>
              <div className={`${styles["package-price-card"]} ${styles["package-price-card--color-primary1"]}`}>
                <div className={`${styles["package-price-card__title"]}`}>
                  <span>{sectionOne.cards[0].label}</span>
                  <h3>{sectionOne.cards[0].name}</h3>
                </div>
                <div className={`${styles["package-price-card__content"]}`}>
                  <div>
                    <span>{sectionOne.cards[0].cms}</span> CMS<br/>
                    <span>{init.pageBuilder}</span> {sectionOne.cards[0].builder}<br/>
                    <span>{sectionOne.cards[0].endTo}</span> {init.pages}<br/>
                    <span>{init.components}</span> {init.included}<br/>
                    <div className={`${styles["package-price-card__list"]}`}>
                      <span>{sectionOne.cards[0].points[0]}</span>
                      <span>{sectionOne.cards[0].points[1]}</span>
                      <span>{sectionOne.cards[0].points[2]}</span>
                      <span>{sectionOne.cards[0].points[3]}</span>
                      <span>{sectionOne.cards[0].points[4]}</span>
                    </div>
                  </div>
                  <div className={`${styles["package-price-card__price"]}`}>
                    <div>
                      {init.delivery}<br />
                      <span className={`${styles["main-text"]}`}>1</span>&nbsp;<span className={`${styles["small-text"]}`}>WEEK</span>
                    </div>
                    <div className="text-right">
                      {init.startTo}<br />
                      <span className={`${styles["main-text"]}`}>1.200</span>&nbsp;<span className={`${styles["small-text"]}`}>€</span><br/>
                      + IVA
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles["package-price-slide"]}>
              <div className={`${styles["package-price-card"]} ${styles["package-price-card--color-primary3"]}`}>
                <div className={`${styles["package-price-card__title"]}`}>
                  <span>{sectionOne.cards[1].label}</span>
                  <h3>{sectionOne.cards[1].name}</h3>
                </div>
                <div className={`${styles["package-price-card__content"]}`}>
                  <div>
                    <span>{sectionOne.cards[1].cms}</span> CMS<br/>
                    <span>{init.pageBuilder}</span> {sectionOne.cards[0].builder}<br/>
                    <span>{sectionOne.cards[1].endTo}</span> {init.pages}<br/>
                    <span>{init.components}</span> {init.included}<br/>
                    <div className={`${styles["package-price-card__list"]}`}>
                      <span>{sectionOne.cards[1].points[0]}</span>
                      <span>{sectionOne.cards[1].points[1]}</span>
                      <span>{sectionOne.cards[1].points[2]}</span>
                      <span>{sectionOne.cards[1].points[3]}</span>
                      <span>{sectionOne.cards[1].points[4]}</span>
                      <span>{sectionOne.cards[1].points[5]}</span>
                    </div>
                  </div>
                  <div className={`${styles["package-price-card__price"]}`}>
                    <div>
                      {init.delivery}<br />
                      <span className={`${styles["main-text"]}`}>1</span>&nbsp;<span className={`${styles["small-text"]}`}>WEEK</span>
                    </div>
                    <div className="text-right">
                      {init.startTo}<br />
                      <span className={`${styles["main-text"]}`}>1.600</span>&nbsp;<span className={`${styles["small-text"]}`}>€</span><br/>
                      + IVA
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles["package-price-slide"]}>
              <div className={`${styles["package-price-card"]} ${styles["package-price-card--color-primary1"]}`}>
                <div className={`${styles["package-price-card__title"]}`}>
                  <span>{sectionOne.cards[2].label}</span>
                  <h3>{sectionOne.cards[2].name}</h3>
                </div>
                <div className={`${styles["package-price-card__content"]}`}>
                  <div>
                    <span>Strapi</span> CMS<br/>
                    <span>Next.js</span> Frontend<br/>
                    <span>{init.speakWithUs}</span><br/>
                    <div className={`${styles["package-price-card__box"]}`}>
                      {sectionOne.cards[2].points[0]}
                    </div>
                  </div>
                  <div className={`${styles["package-price-card__price"]}`}>
                    <div>
                      {init.delivery}<br />
                      <span className={`${styles["main-text"]}`}>6</span>&nbsp;<span className={`${styles["small-text"]}`}>WEEK</span>
                    </div>
                    <div className="text-right">
                     {init.startTo}<br />
                      <span className={`${styles["main-text"]}`}>12.000</span>&nbsp;<span className={`${styles["small-text"]}`}>€</span><br/>
                      + IVA
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles["package-price-slide"]}>
              <div className={`${styles["package-price-card"]} ${styles["package-price-card--color-primary3"]}`}>
                <div className={`${styles["package-price-card__title"]}`}>
                  <span>{sectionOne.cards[3].label}</span>
                  <h3>{sectionOne.cards[3].name}</h3>
                </div>
                <div className={`${styles["package-price-card__content"]}`}>
                  <div>
                    <span>Strapi</span> CMS<br/>
                    <span>Next.js</span> Frontend<br/>
                    <span>{init.speakWithUs}</span><br/>
                    <div className={`${styles["package-price-card__box"]}`}>
                      {sectionOne.cards[2].points[0]}
                    </div>
                  </div>
                  <div className={`${styles["package-price-card__price"]}`}>
                    <div>
                      {init.delivery}<br />
                      <span className={`${styles["main-text"]}`}>12</span>&nbsp;<span className={`${styles["small-text"]}`}>WEEK</span>
                    </div>
                    <div className="text-right">
                      {init.startTo}<br />
                      <span className={`${styles["main-text"]}`}>22.000</span>&nbsp;<span className={`${styles["small-text"]}`}>€</span><br/>
                      + IVA
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </FadeInAnimation>
      </div>
      <div className={`${styles["package-price-custom"]}`}>
        <div className="container mx-auto mt-16 py-8 flex flex-col lg:flex-row items-center lg:justify-between gap-4">
          <div className="lg:w-2/3 text-center lg:text-left">
            <h3 className="pb-1">{lang.sectionCustom.title}</h3>
            <p>{lang.sectionCustom.subTitle}</p>
          </div>
          <div className="flex justify-center lg:justify-end lg:w-1/3">
            <Button link="/#contacts" text={lang.sectionCustom.button} color="main2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagePriceSection;
