import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Main = styled.main`
  text-align: center;

  h1, h2 {
    font-size: 1.7em;
    line-height: 1.4;
    text-transform: lowercase;
  }

  a {
    color: black;
    text-decoration: none;
    border-bottom: 0em solid black;
    padding: 0 0.05em;
    box-shadow: inset 0 0px 0 black;
    transition: all 300ms ease-in-out;
    color: black;
    border-bottom: 0em solid black;
    box-shadow: inset 0 -1px 0 black;
  }

  a:hover {
    color: white;
    box-shadow: inset 0 -1.1em 0 black;
    transition-duration: 100ms;
  }

  ${MEDIA.DESKTOP`
    h1, h2 {
      font-size: 1.5em;
    }
  `};

  ${MEDIA.TABLET`
    h1, h2 {
      font-size: 1.3em;
    }
  `};

  ${MEDIA.PHONE`
    h1, h2 {
      font-size: 1.1em;
    }
  `};
`;

export const FlexMain = styled(Main)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
