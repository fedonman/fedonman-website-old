import React from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import { Outer, Inner } from './section.css';

const Section = ({ markdown, backgroundColor, backgroundImage, showImages }) => {
  return (
    <Outer backgroundColor={backgroundColor}>
      <Inner backgroundImage={backgroundImage} showImages={showImages}>
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
