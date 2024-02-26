const FILE_FRAGMENT = `
  fragment FileParts on UploadFileEntityResponse {
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
  }`;

export { FILE_FRAGMENT };