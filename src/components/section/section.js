import React from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import { Outer, Inner } from './section.css';

const Section = ({ markdown, backgroundColor, backgroundImage }) => {
  return (
    <Outer backgroundColor={backgroundColor}>
      <Inner backgroundImage={backgroundImage}>
        <Markdown escapeHtml={false} source={markdown} />
      </Inner>
    </Outer>
  );
};

Section.propTypes = {
  markdown: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
};

export default Section;
