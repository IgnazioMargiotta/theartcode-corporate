import { SingleArticleItem } from "@theartcode/components/single-article-item/single-article-item.component";

export const LastArticles = ({articles}: any) => {
  const { data: articlesData } = articles
  
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">                
          {articlesData.length > 0 ? (
            articlesData.map((article: any, index: number) => {
              console.log('article', article.attributes)
              const { Title, Slug, categories, Seo } = article.attributes
              return (
                <SingleArticleItem key={article.id} id={articles.id} title={Title} slug={Slug} image={`${process.env.BE_BASE_URL}${Seo.SharedImage.data.attributes.url}`} category={categories.data[0]?.attributes?.Title}  />
              )
            }
          )) : (
            <p>Sorry, we are working on it.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default LastArticles;