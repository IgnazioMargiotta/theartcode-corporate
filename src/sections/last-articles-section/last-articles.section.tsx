import styles from './last-articles.section.module.scss'
import { SingleArticleItem } from "@theartcode/components/single-article-item/single-article-item.component";

export const LastArticlesSection = ({articles, lang}: any) => {
  const { data: articlesData } = articles
  return (
    <section className={`py-[4rem] md:py-[8rem] ${styles['last-articles']}`} id="last-articles">
      <div className={`${styles['decoration-circle']}`}>
        <div></div>
      </div>
      <div className="container mx-auto">
        <div className="text-center pb-16">
          <h2 className="pb-4"><span className={`decoration-title decoration-title--primary3`}>{lang.title}</span></h2>
          <p>{lang.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {articlesData.length > 0 ? (
            articlesData.map((article: any, index: number) => {
              const { Title, Slug, categories, Seo } = article.attributes
              return (
                <SingleArticleItem key={article.id} id={articles.id} title={Title} slug={Slug} image={`${Seo.SharedImage.data.attributes.url}`} category={categories.data[0]?.attributes?.Title} description={Seo.MetaDescription} />
              )
            }
          )) : (
            <p className="text-center">Attualmente non ci sono articoli disponibili.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default LastArticlesSection;