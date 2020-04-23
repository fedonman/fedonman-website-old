import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { BG_COLOR_EVEN, TEXT_COLOR } from 'constants/theme';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
  min-height: 260px;
  background-color: ${BG_COLOR_EVEN};
`;

export const Title = styled.h1`
  color: ${TEXT_COLOR};
  font-family: "Lora", serif;
  font-size: 3rem;
  font-weight: 700;
`;
