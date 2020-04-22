import styled, { css } from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Outer = styled.div`
  display: block;
  height: 50vh;
  width: 100%;
  min-height: 260px;
  position: relative;
  background-color: ${props => props.backgroundColor};
`;

export const Inner = styled.div`
  width: 100%;
  height: 100%;
  min-height: 260px;
  padding: 0 1.5rem;
  ${props => {
    if (typeof window !== 'undefined' && window.CSS.supports('background-attachment', 'fixed') && props.backgroundImage) {
      return css`
        background-position: 50% 50%;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: 12rem auto;
        background-image: url(${props.backgroundImage});
      `;
    }
  }}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${MEDIA.XL`
    background-size: 11rem auto;
  `};

  ${MEDIA.DESKTOP`
    background-size: 10rem auto;
  `};

  ${MEDIA.TABLET`
    background-size: 9rem auto;
  `};

  ${MEDIA.PHONE`
    background-size: 8rem auto;
  `};
`;
