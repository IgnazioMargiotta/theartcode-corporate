import { gql } from "@apollo/client";

// Utils
import { FILE_FRAGMENT } from "./fragments/image-fragment.api";

const FETCH_LIMITED_POSTS = gql`
  ${FILE_FRAGMENT}

  query {
    articles(pagination: { limit: 3 }, sort: "createdAt:desc") {
      data {
        id
        attributes {
          Title
          Slug
          publishedAt
          ReadTime
          Seo {
            MetaTitle
            MetaDescription
            SharedImage {
              ...FileParts
            }
          }
          categories {
            data {
              attributes {
                Title
              }
            }
          }
        }
      }
    }
  }
`;

export { FETCH_LIMITED_POSTS };
