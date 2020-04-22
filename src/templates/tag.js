import React from 'react';
import { graphql } from 'gatsby';

import Head from 'components/head';
import TagHeader from 'components/blog/tag-header';
import BlogBody from 'components/blog/blog-body';

import GlobalStyle from 'global.css.js';

class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <article>
          <Head pageTitle={tag} />
          <GlobalStyle />
          <TagHeader title={tag} />
          <BlogBody posts={posts} />
      </article>
    );
  }
}

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
            tagSlugs
          }
          frontmatter {
            title
            date
            description
            tags
          }
        }
      }
    }
  }
`
