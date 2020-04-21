import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { BG_COLOR_EVEN, TEXT_COLOR } from 'constants/theme';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  width: 100%;
  min-height: 260px;
  background-color: ${BG_COLOR_EVEN};
  color: ${TEXT_COLOR};
  font-family: "Lora", serif;
  text-align: left;
  padding: 0 10%;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
`;

export const Subtitle = styled.p`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 2rem;
`