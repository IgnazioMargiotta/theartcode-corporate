import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import styles from "./fade-in-animation.module.scss";

enum DisplayElement {
  flex = "flex",
  block = "block",
  inlineBlock = "inline-block",
}

interface IFadeInAnimation {
  delay?: number;
  offset?: number;
  display?: DisplayElement;
  height?: string;
  children: any;
}

export const FadeInAnimation = (props: IFadeInAnimation): JSX.Element => {
  const style = {
    display: props.display || "block",
    height: props.height || "auto",
  };

  const [startAnimation, setStartAnimation] = useState<boolean>(false);
  const [delay, setDelay] = useState<number>(props.delay || 0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "350px",
    threshold: 0,
  });

  useEffect(() => {
    let timer1: any;
    if (inView && !startAnimation) {
      timer1 = setTimeout(() => setStartAnimation(true), delay);
    } else if (!inView && startAnimation) {
      setStartAnimation(false);
    }
  }, [inView, startAnimation, delay]);

  return (
    <div ref={ref}>
      <span
        className={`${styles["slide-in"]} ${startAnimation ? `${styles["--view"]}` : "--hide"}`}
        style={style}
      >
        {props.children}
      </span>
    </div>
  );
};

export default FadeInAnimation;
