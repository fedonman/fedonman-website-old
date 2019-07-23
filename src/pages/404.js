import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from 'components/layout';

const Back2 = styled.h2`
  margin-top: 6em;
`;

const NotFound = () => (
  <Layout flow="flex">
    <h1>Not found</h1>
    <Back2>
      <Link to="/">Back</Link>
    </Back2>
  </Layout>
);

export default NotFound;
