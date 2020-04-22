import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import moment from 'moment';

import { Header, PostTitle, PostMeta, Time, TagList, TagItem } from './post-header.css';

const PostHeader = ({ post }) => {
  const { title, date, tags } = post.frontmatter;
  const { slug, tagSlugs } = post.fields;
  return (
    <Header>
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
      <PostTitle>{title}</PostTitle>
    </Header>
  );
};

PostHeader.propTypes = {
  title: PropTypes.string
};

export default PostHeader;