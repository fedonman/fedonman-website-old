import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import moment from 'moment';

import { Body, PostList, PostListItem, PostTitle, PostMeta, Time, TagList, TagItem } from './blog-body.css';


const BlogBody = ({ posts }) => {
  return (
    <Body>
      <PostList>
        {posts.map(post => {
          const { title, date, tags } = post.node.frontmatter;
          const { slug, tagSlugs } = post.node.fields;
          return (
            <PostListItem key={slug}>
              <PostMeta>
                <Time dateTime={moment(date).format('YYYY-MM-DD')}>
                  {moment(date).format('MMMM YYYY')}
                </Time>
                <TagList>
                  {tagSlugs.map((tag, i) => {
                    return (
                      <TagItem key={tag}>
                        <Link to={tag}>
                          {tags[i]}
                        </Link>
                      </TagItem>
                    )
                  })}
                </TagList>
              </PostMeta>
            <PostTitle><Link to={slug}>{title}</Link></PostTitle>
          </PostListItem>
          )
        })}
      </PostList>
    </Body>
  );
};

BlogBody.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default BlogBody;