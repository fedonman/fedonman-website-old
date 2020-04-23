import React from 'react'
import { graphql } from 'gatsby'

import Head from 'components/head';
import PostHeader from 'components/blog/post-header';
import PostBody from 'components/blog/post-body';

import GlobalStyle from 'global.css.js';

class PostTemplate extends React.Component {
  render() {
    // const { title, subtitle } = this.props.data.site.siteMetadata
    const post = this.props.data.markdownRemark
    const { title, description, preview } = post.frontmatter
    // const description = postDescription !== null ? postDescription : subtitle

    return (
      <article>
        <Head
          siteTitle="Digital Stories"
          pageTitle={title}
          siteDescription={description}
          imageUrl={previw ? preview.publicURL : null}
        />
        <GlobalStyle />
        <PostHeader post={post} />
        <PostBody html={post.html}/>
      </article>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        tagSlugs
        slug
      }
      frontmatter {
        title
        tags
        date
        description
        preview {
          publicURL
        }
      }
    }
  }
`
