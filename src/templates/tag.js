import React from 'react';
import { graphql } from 'gatsby';

import GlobalStyle from 'global.css.js';

const TagTemplate = ({ data }) => {
  const { tag } = this.props.pageContext;
  return (
    <div>
      {tag}
    </div>
  );
};

export default TagTemplate

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      filter: {
        frontmatter: {
          tags: { in: [$tag] }
          layout: { eq: "post" }
          draft: { ne: true }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
          }
        }
      }
    }
  }
`
