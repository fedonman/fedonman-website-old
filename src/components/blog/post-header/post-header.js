import React from 'react';
import PropTypes from 'prop-types';
import { Header, Title } from './post-header.css';

const PostHeader = ({ title }) => {
  return (
    <Header>
      <Title>{title}</Title>
    </Header>
  );
};

PostHeader.propTypes = {
  title: PropTypes.string
};

export default PostHeader;