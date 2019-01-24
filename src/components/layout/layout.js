import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import GlobalStyle from 'global.css.js';
import { Main, FlexMain } from './layout.css'

const Layout = ({ data, children, flow }) => {
  if (flow === "normal") {
    return (
      <Main>
        <GlobalStyle />
        <Head />
        {children}
      </Main>
    );
  } else {
    return (
      <FlexMain>
        <GlobalStyle />
        <Head />
        {children}
      </FlexMain>
    );
  }
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  flow: PropTypes.oneOfType(["normal", "flex"])
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
