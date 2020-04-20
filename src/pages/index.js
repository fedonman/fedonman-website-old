import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Section from 'components/section';
import { graphql } from 'gatsby';
import { BG_COLOR_EVEN, BG_COLOR_ODD } from '../constants/theme';

const Index = ({ data }) => {
  const { sections, firstSection, lastSection, backgroundImages} = data.homeJson;
  const loops = 7;
  const loopArray = Array(loops)
    .fill(0)
    .map((e, i) => i);
  return (
    <Layout flow="normal">
      <Section
        markdown={firstSection}
        backgroundColor={`${BG_COLOR_EVEN}`}
        backgroundImage={backgroundImages[0].publicURL}
        key={0}
      />
      {loopArray.map(loop =>
        sections.map((markdown, i) => (
          <Section
            markdown={markdown}
            backgroundColor={
              (loop * sections.length + i) % 2 === 0
                ? `${BG_COLOR_ODD}`
                : `${BG_COLOR_EVEN}`
            }
            backgroundImage={
              backgroundImages[
                (loop * sections.length + i) % backgroundImages.length
              ].publicURL
            }
            key={loop * sections.length + i + 1}
          />
        ))
      )}
      <Section
        markdown={lastSection}
        backgroundColor={
          (loops * sections.length) % 2 === 0
            ? `${BG_COLOR_ODD}`
            : `${BG_COLOR_EVEN}`
        }
        backgroundImage={
          backgroundImages[(loops * sections.length) % backgroundImages.length]
            .publicURL
        }
        key={loops * sections.length}
      />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      sections
      firstSection
      lastSection
      backgroundImages {
        publicURL
      }
    }
  }
`;
