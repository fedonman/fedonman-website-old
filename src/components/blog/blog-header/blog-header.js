import React from 'react';
import PropTypes from 'prop-types';

import { Header, Title, Subtitle } from './blog-header.css';

const BlogHeader = ({ title, intro, details }) => {
  return (
    <Header>
      <Title>{title}</Title>
      <Subtitle>{intro}</Subtitle>
      <Subtitle>{details}</Subtitle>
    </Header>
  );
};

BlogHeader.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  details: PropTypes.string
};

export default BlogHeader;