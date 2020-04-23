import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Head from 'components/head';
import BlogHeader from 'components/blog/blog-header';
import BlogBody from 'components/blog/blog-body/blog-body';

import GlobalStyle from 'global.css.js';

const Blog = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;
    const { title, intro, details, backToMain } = data.blogJson;

    return (
        <main>
            <Head
              siteTitle="Vyron Vasileiadis"
              pageTitle={title}
              siteDescription={details}
            />
            <GlobalStyle />
            <BlogHeader
              title={title}
              intro={intro}
              details={details}
              backToMain={backToMain}
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
            title,
            intro,
            details,
            backToMain
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
