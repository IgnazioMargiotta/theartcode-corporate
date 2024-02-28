interface SingleArticleItemProps {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
}
export const SingleArticleItem = (props: SingleArticleItemProps) => {

  return (
    <div>
      {props.title}
    </div>
  )
}