import styled from 'styled-components';

import MEDIA from 'helpers/mediaTemplates';
import { PRIMARY_COLOR } from 'constants/theme';


export const Body = styled.main`
  width: 60%;
  margin: 0 auto;
  padding: 6.25rem 0;
  font-family: 'Montserrat';

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    /* text-align: justify; */
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 2rem;
  }

  strong {
    font-weight: 700;
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

  ul {
    font-size: 1.5rem;
    line-height: 1.4;
    /* list-style: disc inside; */
    margin-top: -1rem;
    margin-bottom: 2rem;
  }

  ul li {
    margin-bottom: 1rem;
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