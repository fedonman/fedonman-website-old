import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Head from 'components/head';
import BlogHeader from 'components/blog/blog-header';
import BlogBody from 'components/blog/blog-body/blog-body';

import GlobalStyle from 'global.css.js';

const Blog = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;

    return (
        <main>
            <Head />
            <GlobalStyle />
            <BlogHeader 
              title="Digital Stories" 
              intro="Hey, I'm Vyron." 
              details="Welcome to my blog. Here you can find tutorials on Web Development, Machine & Deep Learning and Microsoft Azure." 
            />
            <BlogBody 
              posts={posts}
            />
        </main>
    );
};

Blog.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Blog;

export const query = graphql`
    query BlogQuery {
        blogJson {
            firstSection
        }
        allMarkdownRemark(
            limit: 1000
            filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
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
`;