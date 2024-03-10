import styles from "./package-price-section.module.scss";

import { FadeInAnimation } from "@theartcode/components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const PackagePriceSection = ({ lang }: any) => {

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
    <section className={`${styles["package-price"]} py-[4rem] mt-[4rem]`}>
      <div className="container mx-auto">
        <div className="pb-12">
          <FadeInAnimation>
            <h2 className="pb-4">Siti web & eCommerce</h2>
            <p>Lorem ipsum doloret sit amet</p>
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
                  <span>SITO WEB</span>
                  <h3>BASIC</h3>
                </div>
                <div className={`${styles["package-price-card__content"]}`}>
                  <div>
                    <span>WordPress</span> CMS<br/>
                    <span>Elementor</span> page builder<br/>
                    <span>Fino a 4</span> pagine<br/>
                    <span>Componenti</span> inclusi<br/>
                    <div className={`${styles["package-price-card__list"]}`}>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                    </div>
                  </div>
                  <div className={`${styles["package-price-card__price"]}`}>
                    <div>
                      CONSEGNA<br />
                      <span className={`${styles["main-text"]}`}>10</span>&nbsp;<span className={`${styles["small-text"]}`}>WEEK</span>
                    </div>
                    <div className="text-right">
                      A PARTIRE DA<br />
                      <span className={`${styles["main-text"]}`}>2.000</span>&nbsp;<span className={`${styles["small-text"]}`}>€</span><br/>
                      + IVA
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles["package-price-slide"]}>
              <div className={`${styles["package-price-card"]} ${styles["package-price-card--color-primary3"]}`}>
                <div className={`${styles["package-price-card__title"]}`}>
                  <span>SITO WEB</span>
                  <h3>PRO</h3>
                </div>
                <div className={`${styles["package-price-card__content"]}`}>
                  <div>
                    <span>WordPress</span> CMS<br/>
                    <span>Elementor</span> page builder<br/>
                    <span>Fino a 4</span> pagine<br/>
                    <span>Componenti</span> inclusi<br/>
                    <div className={`${styles["package-price-card__list"]}`}>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                    </div>
                  </div>
                  <div className={`${styles["package-price-card__price"]}`}>
                    <div>
                      CONSEGNA<br />
                      <span className={`${styles["main-text"]}`}>10</span>&nbsp;<span className={`${styles["small-text"]}`}>WEEK</span>
                    </div>
                    <div className="text-right">
                      A PARTIRE DA<br />
                      <span className={`${styles["main-text"]}`}>2.000</span>&nbsp;<span className={`${styles["small-text"]}`}>€</span><br/>
                      + IVA
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles["package-price-slide"]}>
              <div className={`${styles["package-price-card"]} ${styles["package-price-card--color-primary1"]}`}>
                <div className={`${styles["package-price-card__title"]}`}>
                  <span>E-COMMERCE</span>
                  <h3>BASIC</h3>
                </div>
                <div className={`${styles["package-price-card__content"]}`}>
                  <div>
                    <span>WordPress</span> CMS<br/>
                    <span>Elementor</span> page builder<br/>
                    <span>Fino a 4</span> pagine<br/>
                    <span>Componenti</span> inclusi<br/>
                    <div className={`${styles["package-price-card__list"]}`}>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                    </div>
                  </div>
                  <div className={`${styles["package-price-card__price"]}`}>
                    <div>
                      CONSEGNA<br />
                      <span className={`${styles["main-text"]}`}>10</span>&nbsp;<span className={`${styles["small-text"]}`}>WEEK</span>
                    </div>
                    <div className="text-right">
                      A PARTIRE DA<br />
                      <span className={`${styles["main-text"]}`}>2.000</span>&nbsp;<span className={`${styles["small-text"]}`}>€</span><br/>
                      + IVA
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles["package-price-slide"]}>
              <div className={`${styles["package-price-card"]} ${styles["package-price-card--color-primary3"]}`}>
                <div className={`${styles["package-price-card__title"]}`}>
                  <span>ECOMMERCE</span>
                  <h3>PRO</h3>
                </div>
                <div className={`${styles["package-price-card__content"]}`}>
                  <div>
                    <span>WordPress</span> CMS<br/>
                    <span>Elementor</span> page builder<br/>
                    <span>Fino a 4</span> pagine<br/>
                    <span>Componenti</span> inclusi<br/>
                    <div className={`${styles["package-price-card__list"]}`}>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                    </div>
                  </div>
                  <div className={`${styles["package-price-card__price"]}`}>
                    <div>
                      CONSEGNA<br />
                      <span className={`${styles["main-text"]}`}>10</span>&nbsp;<span className={`${styles["small-text"]}`}>WEEK</span>
                    </div>
                    <div className="text-right">
                      A PARTIRE DA<br />
                      <span className={`${styles["main-text"]}`}>2.000</span>&nbsp;<span className={`${styles["small-text"]}`}>€</span><br/>
                      + IVA
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles["package-price-slide"]}>
              <div className={`${styles["package-price-card"]} ${styles["package-price-card--color-primary2"]}`}>
                <div className={`${styles["package-price-card__title"]}`}>
                  <span>SVILUPPO</span>
                  <h3>CUSTOM</h3>
                </div>
                <div className={`${styles["package-price-card__content"]}`}>
                  <div>
                    <span>WordPress</span> CMS<br/>
                    <span>Elementor</span> page builder<br/>
                    <span>Fino a 4</span> pagine<br/>
                    <span>Componenti</span> inclusi<br/>
                    <div className={`${styles["package-price-card__list"]}`}>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                    </div>
                  </div>
                  <div className={`${styles["package-price-card__price"]}`}>
                    <div>
                      CONSEGNA<br />
                      <span className={`${styles["main-text"]}`}>10</span>&nbsp;<span className={`${styles["small-text"]}`}>WEEK</span>
                    </div>
                    <div className="text-right">
                      A PARTIRE DA<br />
                      <span className={`${styles["main-text"]}`}>2.000</span>&nbsp;<span className={`${styles["small-text"]}`}>€</span><br/>
                      + IVA
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </FadeInAnimation>
      </div>
      <div className="container mx-auto">
        <div className="pt-16 pb-12">
          <FadeInAnimation>
            <h2 className="pb-4">Headless</h2>
            <p>Lorem ipsum doloret sit amet</p>
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
                  <span>SITO WEB</span>
                  <h3>BASIC</h3>
                </div>
                <div className={`${styles["package-price-card__content"]}`}>
                  <div>
                    <span>WordPress</span> CMS<br/>
                    <span>Elementor</span> page builder<br/>
                    <span>Fino a 4</span> pagine<br/>
                    <span>Componenti</span> inclusi<br/>
                    <div className={`${styles["package-price-card__list"]}`}>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                    </div>
                  </div>
                  <div className={`${styles["package-price-card__price"]}`}>
                    <div>
                      CONSEGNA<br />
                      <span className={`${styles["main-text"]}`}>10</span>&nbsp;<span className={`${styles["small-text"]}`}>WEEK</span>
                    </div>
                    <div className="text-right">
                      A PARTIRE DA<br />
                      <span className={`${styles["main-text"]}`}>2.000</span>&nbsp;<span className={`${styles["small-text"]}`}>€</span><br/>
                      + IVA
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles["package-price-slide"]}>
              <div className={`${styles["package-price-card"]} ${styles["package-price-card--color-primary2"]}`}>
                <div className={`${styles["package-price-card__title"]}`}>
                  <span>SVILUPPO</span>
                  <h3>CUSTOM</h3>
                </div>
                <div className={`${styles["package-price-card__content"]}`}>
                  <div>
                    <span>WordPress</span> CMS<br/>
                    <span>Elementor</span> page builder<br/>
                    <span>Fino a 4</span> pagine<br/>
                    <span>Componenti</span> inclusi<br/>
                    <div className={`${styles["package-price-card__list"]}`}>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                      <span>Lorem ipsum</span>
                    </div>
                  </div>
                  <div className={`${styles["package-price-card__price"]}`}>
                    <div>
                      CONSEGNA<br />
                      <span className={`${styles["main-text"]}`}>10</span>&nbsp;<span className={`${styles["small-text"]}`}>WEEK</span>
                    </div>
                    <div className="text-right">
                      A PARTIRE DA<br />
                      <span className={`${styles["main-text"]}`}>2.000</span>&nbsp;<span className={`${styles["small-text"]}`}>€</span><br/>
                      + IVA
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </FadeInAnimation>
      </div>
    </section>
  );
};

export default PackagePriceSection;
