import React from 'react'
// import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
// import Layout from '../components/Layout'
// import Sidebar from '../components/Sidebar'
// import TagTemplateDetails from '../components/TagTemplateDetails'
// import HomeButton from './../components/HomeButton/HomeButton';

class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext

    return (
      <div>
        {tag}
      </div>
    )
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
