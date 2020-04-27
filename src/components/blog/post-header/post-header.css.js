import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { BG_COLOR_EVEN, PRIMARY_COLOR, TEXT_COLOR } from 'constants/theme';

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

export const PostMeta = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
`;

export const Time = styled.time`

`;

export const TagList = styled.ul`
  display: inline;
  margin-left: 1rem;
`;

export const TagItem = styled.li`
  display: inline;
  margin-right: 1rem;

  a {
    color: ${PRIMARY_COLOR};
    text-decoration: none;
  }

  a:hover, a:focus {
    text-decoration: underline;
  }
`;

export const PostTitle = styled.p`
  font-family: 'Lora', serif;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;

export const Back = styled.p`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 2rem;
  position: absolute;
  top: 20px;
  text-transform: lowercase;

  a {
    font-size: 0.7em;
    font-weight: 600;
    color: inherit;
    text-decoration: none;
  }

  a:hover, a:focus {
    text-decoration: underline;
  }
`
