import styled from 'styled-components';

import MEDIA from 'helpers/mediaTemplates';
import { PRIMARY_COLOR } from 'constants/theme';


export const Body = styled.main`
  /* margin: 0; */
  padding: 6.25rem 3rem;
  font-family: 'Montserrat';
  text-align: justify;

  ${MEDIA.XL`
    padding: 6.25rem 2.5rem;
  `};

  ${MEDIA.DESKTOP`
    padding: 6.25rem 2rem;
  `};

  ${MEDIA.TABLET`
    padding: 6.25rem 1.5rem;
  `};

  ${MEDIA.PHONE`
    padding: 6.25rem 1rem;
  `};

  h1, h2, h3, h4, h5, h6, p, ul {
    max-width: 960px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;

    ${MEDIA.XL`
      width: 70%;
    `};

    ${MEDIA.DESKTOP`
      width: 80%;
    `};

    ${MEDIA.TABLET`
      width: 90%;
    `};

    ${MEDIA.PHONE`
      width: 100%;
    `};
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.275rem;
    font-weight: 400;
    line-height: 1.4;
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
    font-size: 1.275rem;
    line-height: 1.4;
    margin-top: -1rem;
    margin-bottom: 2rem;
  }

  ul li {
    margin-bottom: 1rem;
  }

  .bulleted ul {
    list-style: disclosure-closed;
  }

  .bulleted ul li {
    margin-left: 2rem;
  }

  .gatsby-highlight {
    margin-bottom: 2rem;
  }

  code[class*="language-"], pre[class*="language-"] {
    font-family: 'Fira Code';
  }

  figcaption {
    margin-top: 0.4rem;
    text-align: center;
  }
`;
