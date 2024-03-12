import { useState, useEffect } from "react";
import { Svg, SocialBox } from "@theartcode/components";
import styles from "./footer-section.module.scss";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollThreshold = 500;
      setShowScrollButton(scrollTop > scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <footer className={`${styles["footer"]}`}>
      <div className="container mx-auto flex flex-col md:flex-row gap-4 py-8">
        <div className="md:w-1/6 flex items-center justify-center md:justify-start">
          <Image
            src={`assets/images/logo_vibra_black.svg`}
            className={`${styles["footer__logo"]}`}
            width={200}
            height={36}
            alt="Vibra Studio"
          />
        </div>
        <div className="md:w-4/6 flex items-center justify-center">
          <div className="text-center">
            Vibra Studio - Via Fausto Coppi, 8/a 43122 Parma -
            P.IVA&nbsp;02949510347{" "}
            <Link
              href="https://www.iubenda.com/privacy-policy/40428943/legal"
              className="underline"
              target="_blank"
              title="Cookie Policy"
            >
              Cookie&nbsp;Policy
            </Link>
            <br />
            <Link
              href="mailto:info@vibra.studio"
              className="font-normal"
              title="info@vibra.studio"
            >
              info@vibra.studio
            </Link>{" "}
            &nbsp;{" "}
            <Link
              href="tel:+393518015772"
              className="font-normal"
              title="+39 351 801 5772"
            >
              +39 351 801 5772
            </Link>
          </div>
        </div>
        <div className="md:w-1/6 flex items-center justify-center md:justify-end">
          <SocialBox size="medium" />
        </div>
      </div>
      <button
        type="button"
        className={`${styles["scrollButton"]} ${showScrollButton ? styles["scrollButton--active"] : ""}`}
        onClick={handleScrollTop}
        aria-label="Top"
      >
        <svg viewBox="0 0 20 20">
          <use href="#arrow-double-top"></use>
        </svg>
      </button>
      <Svg />
    </footer>
  );
};

export default FooterSection;
