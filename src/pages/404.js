import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from 'components/layout';

const Back = styled.h2`
  margin-top: 6em;
`;

const NotFound = () => (
  <Layout flow="flex">
    <h1>Not found</h1>
    <Back>
      <Link to="/">Back</Link>
    </Back>
  </Layout>
);

export default NotFound;
