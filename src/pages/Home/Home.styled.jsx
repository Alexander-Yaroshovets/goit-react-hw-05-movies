import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const HomeBox = styled.div`
  padding: 30px;
`;
export const HomeTitle = styled.h1`
  color: red;
`;
export const MovieItem = styled(NavLink)`
  color: blue;
  border-radius: 4px;
  text-decoration: none;

  &.active {
    background-color: blue;
    color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #e22b9f;
    text-decoration: underline;
  }
`;
export const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
`;
