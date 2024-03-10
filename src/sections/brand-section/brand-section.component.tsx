import styles from "./brand-section.module.scss";
import Image from "next/image";
import { FadeInAnimation } from "@theartcode/components";

export const BrandSection = ({ lang }: any) => {
  return (
    <section className={`${styles["brand"]} py-[4rem] lg:py-[8rem]`}>
      <div className="container mx-auto">
        <FadeInAnimation>
          <div className="grid grid-cols-6 items-center gap-8">
            <div className="text-center lg:text-left col-span-6 lg:col-span-2">
              <h2 className="pb-4">{lang.title}</h2>
              <p>{lang.subtitle}</p>
            </div>
            <div className={`${styles["brand-container"]} col-span-6 lg:col-span-4 items-center`}>
              <div className={`${styles["brand__single-box"]} ${styles["brand__single-box--size33"]}`}>
                <Image
                  src={`/assets/images/flat-icon/icon_app.webp`}
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
              <div className={`${styles["brand__single-box"]} ${styles["brand__single-box--size33"]}`}>
                <Image
                  src={`/assets/images/flat-icon/icon_architecture.webp`}
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
              <div className={`${styles["brand__single-box"]} ${styles["brand__single-box--size33"]}`}>
                <Image
                  src={`/assets/images/flat-icon/icon_cloud.webp`}
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
              <div className={`${styles["brand__single-box"]} ${styles["brand__single-box--size25"]}`}>
                <Image
                  src={`/assets/images/logo_vibra_black.svg`}
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
              <div className={`${styles["brand__single-box"]} ${styles["brand__single-box--size25"]}`}>
                <Image
                  src={`/assets/images/logo_vibra_black.svg`}
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
              <div className={`${styles["brand__single-box"]} ${styles["brand__single-box--size25"]}`}>
                <Image
                  src={`/assets/images/logo_vibra_black.svg`}
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
              <div className={`${styles["brand__single-box"]} ${styles["brand__single-box--size25"]}`}>
                <Image
                  src={`/assets/images/logo_vibra_black.svg`}
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
            </div>
          </div>
        </FadeInAnimation>
      </div>
    </section>
  );
};

export default BrandSection;
