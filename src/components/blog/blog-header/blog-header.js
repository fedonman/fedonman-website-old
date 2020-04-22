import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Header, Title, Subtitle } from './blog-header.css';

const BlogHeader = ({ title, intro, details, backToMain }) => {
  return (
    <Header>
      <Title>{title}</Title>
      <Subtitle>{intro}</Subtitle>
      <Subtitle>{details}</Subtitle>
      <Subtitle>
        <Link to="/">{backToMain}</Link>
      </Subtitle>
    </Header>
  );
};

BlogHeader.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  details: PropTypes.string,
  backToMain: PropTypes.string
};

export default BlogHeader;