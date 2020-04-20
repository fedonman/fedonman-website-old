import React from 'react';
import PropTypes from 'prop-types';
import { Header, Title } from './postHeader.css';

const PostHeader = ({ postTitle }) => {
  return (
    <Header>
      <Title>{postTitle}</Title>
    </Header>
  );
};

PostHeader.propTypes = {
  postTitle: PropTypes.string
};

export default PostHeader;