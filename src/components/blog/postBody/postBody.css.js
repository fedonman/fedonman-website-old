import styled from 'styled-components';

import MEDIA from 'helpers/mediaTemplates';
import { PRIMARY_COLOR } from 'constants/theme';


export const Body = styled.main`
  width: 60%;
  margin: 0 auto;
  padding: 6.25rem 0;
  font-family: 'Montserrat';

  p {
    /* text-align: justify; */
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 2rem;
  }

  a {
    color: ${PRIMARY_COLOR};
    text-decoration: none;
    transition: text-decoration 0.4s ease-in-out 0;
  }

  a:hover, a:focus, a:active {
    text-decoration: underline;
    outline-width: 0;
  }

  .gatsby-highlight {
    margin-bottom: 2rem;
  }

  code[class*="language-"], pre[class*="language-"] {
    font-family: 'Fira Code';
  }

  ${MEDIA.XL`
    width: 70%;
  `};

  ${MEDIA.DESKTOP`
    width: 80%;
  `};

  ${MEDIA.TABLET`
    width: 90%;
  `};
`;