import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import VideoPlayer from 'components/video-player';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

const Title = styled.h1`
  margin-top: 2em;
`;

const Subtitle = styled.h2`
  margin-top: 2em;
`;

const Back = styled.h2`
  margin-top: 1em;
`;

const Travel = ({ data }) => {
  const { title, overlay, poster, sources } = data.travelJson.video;
  const video = {
    title: title,
    overlay: overlay.publicURL,
    poster: poster.publicURL,
    sources: sources.map(source => ({
      src: source.src.publicURL,
      type: source.type,
    })),
  };

  return (
    <Layout flow="normal">
      <Title>Living full time is closed than you think</Title>
      <VideoPlayer {...video} />
      <Subtitle>Contact me for more info!</Subtitle>
      <Back>
        <Link to="/">Back</Link>
      </Back>
    </Layout>
  );
};

Travel.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Travel;

export const query = graphql`
  query TravelQuery {
    travelJson {
      video {
        title
        overlay {
          publicURL
        }
        poster {
          publicURL
        }
        sources {
          src {
            publicURL
          }
          type
        }
      }
    }
  }
`;
