import React from 'react';
import PropTypes from 'prop-types';

import { Body } from './postBody.css';

const PostBody = ({ html }) => {
  // const { subtitle, author } = this.props.data.site.siteMetadata;
  // const tags = post.fields.tagSlugs;

  return (
    <Body
      /* eslint-disable-next-line react/no-danger */
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

// PostBody.propTypes = {
//   html: PropTypes.string
// };

export default PostBody;
