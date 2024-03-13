import * as marked from 'marked'

import { Button } from "@theartcode/components";
import styles from "./presentation-section.module.scss";
import Image from "next/image";
import Link from "next/link";

export const PresentationSection = ({ lang }: any) => {

  const description = marked.parse(lang.description);

  return (
    <section
      className={`${styles["presentation"]} py-[15rem] mb-[4rem]`}
    >
      <div
        className={`${styles["decoration-circle"]} ${styles["decoration-circle--top-left"]}`}
      >
        <div>
          <div className={`${styles["decoration-circle__single"]}`}></div>
          <div className={`${styles["decoration-circle__single"]}`}></div>
          <div className={`${styles["decoration-circle__single"]}`}></div>
        </div>
      </div>
      <div
        className={`${styles["decoration-circle"]} ${styles["decoration-circle--primary3"]}`}
      >
        <div>
          <div className={`${styles["decoration-circle__single"]}`}></div>
          <div className={`${styles["decoration-circle__single"]}`}></div>
          <div className={`${styles["decoration-circle__single"]}`}></div>
        </div>
      </div>
      <div className={`${styles["decoration-square"]}`}>
        <div></div>
      </div>
      <div className="container mx-auto text-center z-1">
        <div className={`${styles["presentation-container"]}`}>
            <h1>
              Where&nbsp;<span className="text-color-main1">art</span> meets&nbsp;
              <span className="text-color-main2">code</span>
            </h1>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          <div className={`${styles["buttons"]}`}>
            <Button
              link="#services"
              text={lang.buttonLeft}
              style="ghost"
              color="main1"
            />
            <Button
              link="#contacts"
              text={lang.buttonRight}
              style="fill"
              color="main2"
            />
          </div>
        </div>
      </div>
      <Link className={`${styles["presentation__arrow"]}`} href="#customers">
        <Image
          src={`assets/images/arrow_bottom.svg`}
          width={35}
          height={75}
          alt="Down"
        />
      </Link>
    </section>
  );
};

export default PresentationSection;
