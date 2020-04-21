import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { PRIMARY_COLOR } from 'constants/theme';

export const Body = styled.main`
  padding: 6rem 10%;
`;

export const PostList = styled.ul`

`;

export const PostListItem = styled.li`
  margin-bottom: 6rem;
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
  font-family: 'Lora', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover, a:focus {
    text-decoration: underline;
  }
`;