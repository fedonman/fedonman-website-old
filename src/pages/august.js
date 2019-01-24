import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import moment from 'moment';
import Layout from 'components/layout';

const Back = styled.h2`
  margin-top: 6em;
`;

class August extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      diff: 0,
      suffix: ''
    };
  }

  componentDidMount() {
    const today = moment();
    const lastAugust = (today.month() <= 6) ? '01/08' + (today.year() - 1) : '01/08' + today.year();
    const august = moment(lastAugust, 'DD/MM/YYYY');
    const diff = today.diff(august, "days") + 1;
    let suffix = 'th';
    if (diff === 1) suffix = 'st';
    if (diff === 2) suffix = 'nd';
    if (diff === 3) suffix = 'rd';
    this.setState({
      diff: diff,
      suffix: suffix
    });
  }

  render() {
    return (
      <Layout flow="flex">
          <h1>Today is the {this.state.diff}{this.state.suffix} of August</h1>
          <Back><Link to="/">Back</Link></Back>
      </Layout>
    );
  }
}

export default August;
