import { gql } from "@apollo/client";
import { FILE_FRAGMENT } from "./fragments/image-fragment.api"


const FETCH_SINGLE_POST = gql`
${FILE_FRAGMENT}

query GetSinglePost(
    $slug: String!
  ) {
  articles(
    filters: {
      Slug: { eq: $slug}
    }) {
    data {
      id
      attributes {
        Title
        Seo {
          MetaTitle
          MetaDescription
          Keywords
           SharedImage {
            ...FileParts
          }
        }
        Content {
          __typename
          ... on ComponentContentText {
            id
            Text
          }
          ... on ComponentContentHeroContent {
            Revert
						Title
            Text
						Link {
              Text
							Alt
              url
              Blank
            }
            Image {
              data {
                id
                attributes {
                  alternativeText
                  width
                  height
                  mime
                  url
                  formats
                }
              }
            }
          }
          ... on ComponentContentCodeView {
            Code
          }
        }
      }
    }
  }
}`;



export { FETCH_SINGLE_POST };
