import React from 'react'
import { graphql } from 'gatsby'

import Head from 'components/head';

import GlobalStyle from 'global.css.js';
import { Header, Body } from './post.css';


class PostTemplate extends React.Component {
  render() {
    // const { title, subtitle } = this.props.data.site.siteMetadata
    const post = this.props.data.markdownRemark
    const { title: postTitle, description: postDescription } = post.frontmatter
    // const description = postDescription !== null ? postDescription : subtitle

    return (
      <div>
        <Head pageTitle={postTitle}/>
        <GlobalStyle />
        <Header>
          {postTitle}
        </Header>
        <h2>{postDescription}</h2>
      </div>
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
