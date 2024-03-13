import * as marked from 'marked'
import styles from "./brand-section.module.scss";
import Image from "next/image";
import { FadeInAnimation } from "@theartcode/components";

export const BrandSection = ({ lang }: any) => {

  const subtitle = marked.parse(lang.subtitle);

  return (
    <section className={`${styles["brand"]} py-[4rem] lg:py-[8rem]`}>
      <div className="container mx-auto">
        <FadeInAnimation>
          <div className="grid grid-cols-6 items-center gap-8">
            <div className="text-center lg:text-left col-span-6 lg:col-span-2">
              <h2 className="pb-4">{lang.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: subtitle }} />
            </div>
            <div className={`${styles["brand-container"]} col-span-6 lg:col-span-4 items-center`}>
              <div className={`${styles["brand__single-box"]} ${styles["brand__single-box--size33"]}`}>
                <Image
                  src={`/assets/images/brands-logo/brands_ilpost.webp`}
                  width={200}
                  height={68}
                  alt="il POST"
                />
              </div>
              <div className={`${styles["brand__single-box"]} ${styles["brand__single-box--size33"]}`}>
                <Image
                  src={`/assets/images/brands-logo/brands_photosi.webp`}
                  width={200}
                  height={53}
                  alt="PhotoSi"
                />
              </div>
              <div className={`${styles["brand__single-box"]} ${styles["brand__single-box--size33"]}`}>
                <Image
                  src={`/assets/images/brands-logo/brands_iungo.webp`}
                  width={200}
                  height={78}
                  alt="iungo"
                />
              </div>
              <div className={`${styles["brand__single-box"]} ${styles["brand__single-box--size25"]}`}>
                <Image
                  src={`/assets/images/brands-logo/brands_np_digital.webp`}
                  width={146}
                  height={64}
                  alt="NP digital"
                />
              </div>
              <div className={`${styles["brand__single-box"]} ${styles["brand__single-box--size25"]}`}>
                <Image
                  src={`/assets/images/brands-logo/brands_matehub.webp`}
                  width={146}
                  height={50}
                  alt="MateHub"
                />
              </div>
              <div className={`${styles["brand__single-box"]} ${styles["brand__single-box--size25"]}`}>
                <Image
                  src={`/assets/images/brands-logo/brands_iride.webp`}
                  width={146}
                  height={30}
                  alt="IRIDE"
                />
              </div>
              <div className={`${styles["brand__single-box"]} ${styles["brand__single-box--size25"]}`}>
                <Image
                  src={`/assets/images/brands-logo/brands_frg.webp`}
                  width={146}
                  height={35}
                  alt="FRG Technology Consulting"
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
