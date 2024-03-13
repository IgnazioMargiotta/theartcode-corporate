import styles from "./last-articles.section.module.scss";
import { SingleArticleItem } from "@theartcode/components/single-article-item/single-article-item.component";
import { FadeInAnimation } from "@theartcode/components";

export const LastArticlesSection = ({ articles, lang }: any) => {
  const { data: articlesData } = articles;

  return (
    <section
      className={`${styles["last-articles"]} py-[4rem]`}
      id="last-articles"
    >
      <div className={`${styles["decoration-circle"]}`}>
        <div></div>
      </div>
      <div className="container mx-auto">
        <div className="text-center pb-16">
          <FadeInAnimation>
            <h2 className="pb-4">
              <span className={`decoration-title decoration-title--primary3`}>
                {lang.title}
              </span>
            </h2>
            <p>{lang.subtitle}</p>
          </FadeInAnimation>
        </div>
        <FadeInAnimation>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {articlesData.length > 0 ? (
              articlesData.map((article: any, index: number) => {
                const { Title, Slug, categories, Seo, ReadTime } = article.attributes;
                return (
                  <SingleArticleItem
                    key={article.id}
                    id={articles.id}
                    title={Title}
                    slug={Slug}
                    readTime={ReadTime}
                    image={`${Seo.SharedImage.data.attributes.url}`}
                    category={categories.data[0]?.attributes?.Title}
                    description={Seo.MetaDescription}
                  />
                );
              })
            ) : (
              <p className="text-center">
                Attualmente non ci sono articoli disponibili.
              </p>
            )}
          </div>
        </FadeInAnimation>
      </div>
    </section>
  );
};

export default LastArticlesSection;
