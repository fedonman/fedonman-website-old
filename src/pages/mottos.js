import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Section from 'components/section';
import { graphql } from 'gatsby';
import { BG_COLOR_EVEN, BG_COLOR_ODD } from '../constants/theme';

const Mottos = ({ data }) => {
  const sections = data.mottosJson.sections;
  const firstSection = data.mottosJson.firstSection;
  const lastSection = data.mottosJson.lastSection;
  return (
    <Layout flow="normal">
      <Section
        markdown={firstSection}
        backgroundColor={`${BG_COLOR_ODD}`}
        key={0}
      />
      {sections.map((markdown, i) => (
        <Section
          markdown={markdown}
          backgroundColor={i % 2 === 0 ? `${BG_COLOR_EVEN}` : `${BG_COLOR_ODD}`}
          key={i + 1}
        />
      ))}
      <Section
        markdown={lastSection}
        backgroundColor={
          sections.length % 2 === 0 ? `${BG_COLOR_EVEN}` : `${BG_COLOR_ODD}`
        }
        key={sections.length + 1}
      />
    </Layout>
  );
};

Mottos.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Mottos;

export const query = graphql`
  query MottospageQuery {
    mottosJson {
      sections
      firstSection
      lastSection
    }
  }
`;
