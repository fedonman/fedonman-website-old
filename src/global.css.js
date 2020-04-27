import { createGlobalStyle } from 'styled-components';
import { PRIMARY_COLOR, TEXT_COLOR } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';
import * as fonts from './typography';

export default createGlobalStyle`
  @font-face {
    font-family: 'Orator';
    font-display: auto;
    src: local('Orator'), url(${fonts.OratorEOT}) format("eot"), url(${fonts.OratorWOFF}) format("woff"), url(${fonts.OratorTTF}) format("truetype"), url(${fonts.OratorSVG}) format("svg");
    font-weight: normal;
    font-style: normal;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    margin: 0;
    padding: 0;
    border: 0;

    ${MEDIA.XL`
      font-size: 15px;
    `};

    ${MEDIA.DESKTOP`
      font-size: 14px;
    `};

    ${MEDIA.TABLET`
      font-size: 13px;
    `};

    ${MEDIA.PHONE`
      font-size: 12px;
    `};
  }

  body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    position: relative;
    font-family: 'Orator';
    font-weight: 400;
    transition: font-size .2s, background-position .2s;
    color: ${TEXT_COLOR};
    height: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-family: "SFMono-Regular", "Liberation Mono", Courier, monospace;
  } */
`;
