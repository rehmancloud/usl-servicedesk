/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const removePost = /* GraphQL */ `
  mutation RemovePost($p_id: ID!) {
    removePost(p_id: $p_id) {
      p_id
      title
      created
      lastUpdated
    }
  }
`;
export const addPost = /* GraphQL */ `
  mutation AddPost($p_id: ID!, $title: String!) {
    addPost(p_id: $p_id, title: $title) {
      p_id
      title
      created
      lastUpdated
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost($p_id: ID!, $title: String!) {
    updatePost(p_id: $p_id, title: $title) {
      p_id
      title
      created
      lastUpdated
    }
  }
`;
