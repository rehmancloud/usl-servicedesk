/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const allPost = /* GraphQL */ `
  query AllPost($count: Int, $nextToken: String) {
    allPost(count: $count, nextToken: $nextToken) {
      posts {
        p_id
        title
        created
        lastUpdated
      }
      nextToken
    }
  }
`;
export const singlePost = /* GraphQL */ `
  query SinglePost($p_id: ID!) {
    singlePost(p_id: $p_id) {
      p_id
      title
      created
      lastUpdated
    }
  }
`;
