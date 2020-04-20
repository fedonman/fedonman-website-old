import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Section from 'components/section';
import { graphql } from 'gatsby';
import { BG_COLOR_EVEN, BG_COLOR_ODD } from 'constants/theme';

const Blog = ({ data }) => {
    const posts = data.allMarkdownRemark.edges
    const items = []
    posts.forEach(post => {
        items.push(`## [${post.node.frontmatter.title}](${post.node.fields.slug})`)
    })

    return (
        <Layout> 
            <Section 
                markdown={data.blogJson.firstSection}
                backgroundColor={BG_COLOR_EVEN}
            />
            {items.map((post, i) => (
                <Section
                    markdown={post}
                    backgroundColor={
                        i % 2 === 0
                          ? `${BG_COLOR_ODD}`
                          : `${BG_COLOR_EVEN}`
                      }
                    key={i}
                />
                )
            )}
        </Layout>
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