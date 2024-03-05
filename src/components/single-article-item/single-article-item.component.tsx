/* eslint-disable @next/next/no-img-element */
import styles from './single-article-item.module.scss';
import Image from 'next/image';
import Link from 'next/link';
interface SingleArticleItemProps {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
  description: string;
}

export const SingleArticleItem = (props: SingleArticleItemProps) => {
  return (
    <div className={`${styles['last-articles-box']}`}>
      <Link className={`${styles['last-articles-box__image']}`} href={`#${props.slug}`} title={props.title}>
        <img loading="lazy" src={props.image} width={410} height={230} alt={props.title} />
      </Link>
      <div>
        <Link href={`#${props.slug}`} title={props.title}>
          <h4>{props.title}</h4>
        </Link>
        {props.description && <p className={`${styles['last-articles-box__description']}`}>{props.description}</p>}
        <div className={`${styles['last-articles-box__finalrow']}`}>
          {props.category && <div className={`${styles['last-articles-box__category']}`}>{props.category}</div>}
          <Link className={`${styles['last-articles-box__button']}`} href={`localhost:3000/post/${props.slug}`} title={props.title}>
            <svg viewBox="0 0 20 20">
              <use href="#arrow-right"></use>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}