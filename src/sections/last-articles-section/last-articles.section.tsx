import styles from "./last-articles.section.module.scss";
import { SingleArticleItem } from "@theartcode/components/single-article-item/single-article-item.component";
import { FadeInAnimation, Button } from "@theartcode/components";

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
        <FadeInAnimation>
          <div className="text-center pb-16">
            <h2 className="pb-4">
              <span className={`decoration-title`}>
                {lang.title}
              </span>
            </h2>
            <p>{lang.subtitle}</p>
         </div>
        </FadeInAnimation>
        <FadeInAnimation>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-[1.5rem] lg:gap-[2rem]">
            {articlesData.length > 0 ? (
              articlesData.map((article: any, index: number) => {
                const { Title, Slug, categories, publishedAt, Seo, ReadTime } = article.attributes;
                return (
                  <SingleArticleItem
                    sizeStyle="M"
                    key={article.id}
                    id={article.id}
                    title={Title}
                    date={publishedAt}
                    slug={Slug}
                    readTime={ReadTime}
                    image={`${Seo.SharedImage.data.attributes.url}`}
                    categories={categories.data}
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
        <FadeInAnimation>
          <div className="text-center pt-12">
            <Button
              link="https://theartcode.dev/"
              text={lang.button}
              target = "_blank"
              style="ghost"
              color="main1"
            />
         </div>
        </FadeInAnimation>
      </div>
    </section>
  );
};

export default LastArticlesSection;
