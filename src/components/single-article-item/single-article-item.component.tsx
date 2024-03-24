import styles from "./single-article-item.module.scss";
import Image from "next/image";
import Link from "next/link";

//@theArtCode
import { getDaysDate } from "@theartcode/utils";

interface SingleArticleItemProps {
  sizeStyle: 'S' | 'M' | 'L' | 'visual';
  id: number;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  image: string;
  categories: [unknown];
  description: string;
}

export const SingleArticleItem = (props: SingleArticleItemProps) => {
  const formattedDate = getDaysDate(props.date)

  return (
    <>
      {props.sizeStyle !== 'visual' && (
        <div className={`${styles["last-articles-box"]}`} data-size={props.sizeStyle}>
          {props.readTime && props.image && (
            <span className={`${styles["last-articles-box__read-time"]}`}>
              <svg viewBox="0 0 20 23">
                <use href="#timer"></use>
              </svg>
              <span>{props.readTime}</span>
            </span>
          )}
          {props.image && (
            <Link
              className={`${styles["last-articles-box__image"]}`}
              href={`https://theartcode.dev/blog/${props.slug}`}
              target="_blank"
              title={props.title}
            >
              <Image src={props.image} width={1200} height={630} alt={props.title} />
            </Link>
          )}
          <div>
            {props.sizeStyle === 'L' && (
              <span className={`${styles["last-articles-box__tags"]}`}>
                {props.categories.length > 0 && props.categories.map((category: any,index: number) => {
                  return (<span key={index}>{category.attributes.Title}</span>)
                })}
              </span>
            )}
            <Link
              href={`https://theartcode.dev/blog/${props.slug}`}
              target="_blank"
              title={props.title}
            >
              <h4>{props.title}</h4>
            </Link>
            {props.description && props.sizeStyle !== 'S' && (
              <p className={`${styles["last-articles-box__description"]}`}>
                {props.description}
              </p>
            )}
            <div className={`${styles["last-articles-box__finalrow"]}`}>
              {formattedDate && (
                <div className={`${styles["last-articles-box__date"]}`}>
                  {formattedDate}
                </div>
              )}
              <Link
                className={`${styles["last-articles-box__button"]}`}
                href={`https://theartcode.dev/blog/${props.slug}`}
                target="_blank"
                title={props.title}
              >
                Leggi
                <svg viewBox="0 0 20 10" width="30">
                  <use href="#arrow-stretch"></use>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
      {props.sizeStyle === 'visual' && (
        <Link 
          href={`./blog/${props.slug}`}
          target="_blank"
          title={props.title}
        >
          <div className={`${styles["last-articles-box"]}`} data-size={props.sizeStyle} style={props.image ? {backgroundImage: `url(${props.image})`} : {}}>
            {props.readTime && props.image && (
              <span className={`${styles["last-articles-box__read-time"]}`}>
                <svg viewBox="0 0 20 23">
                  <use href="#timer"></use>
                </svg>
                <span>{props.readTime}</span>
              </span>
            )}
            <div>
              {formattedDate && (
                <div className={`${styles["last-articles-box__date"]}`}>
                  {formattedDate}
                </div>
              )}
              <h4>{props.title}</h4>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};