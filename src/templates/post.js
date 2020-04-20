import React from 'react'
import { graphql } from 'gatsby'

import Head from 'components/head';
import PostHeader from 'components/blog/postHeader';
import PostBody from 'components/blog/postBody';

import GlobalStyle from 'global.css.js';
import { Header, Body } from './post.css';

class PostTemplate extends React.Component {
  render() {
    // const { title, subtitle } = this.props.data.site.siteMetadata
    const post = this.props.data.markdownRemark
    const { title: postTitle, description: postDescription } = post.frontmatter
    // const description = postDescription !== null ? postDescription : subtitle

    return (
      <article>
        <Head pageTitle={postTitle}/>
        <GlobalStyle />
        <PostHeader postTitle={postTitle} />
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
      }
    }
  }
`
