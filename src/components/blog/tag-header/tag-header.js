import React from 'react';
import PropTypes from 'prop-types';
import { Header, Title } from './tag-header.css';

const TagHeader = ({ title }) => {
  return (
    <Header>
      <Title>{title}</Title>
    </Header>
  );
};

TagHeader.propTypes = {
  title: PropTypes.string
};

export default TagHeader;