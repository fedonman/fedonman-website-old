import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from 'components/layout';

const Back = styled.h2`
  margin-bottom: 1em;
`;

const Map = styled.iframe`
  flex: 1 0 0;
  width: 90vw;
  transform: translateY(-50px);
`;

class Kavvadias extends PureComponent {
  constructor(props) {
    super(props);


  }

  componentDidMount() {

  }

  render() {
    return (
      <Layout flow="flex">
        <Map src="https://www.google.com/maps/d/u/0/embed?mid=1MwSLBy9oQK4B9qhQiXsM4C28MUJezNz8" width="640" height="480"></Map>
        <Back>
          <Link to="/">Back</Link>
        </Back>
      </Layout>
    );
  }
}

export default Kavvadias;
