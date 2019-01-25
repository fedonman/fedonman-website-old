import styled from 'styled-components';
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
  padding: 0 20px;
  background-position: 50% 50%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 25vmin auto;
  background-image: url(${props => props.backgroundImage || ""});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
