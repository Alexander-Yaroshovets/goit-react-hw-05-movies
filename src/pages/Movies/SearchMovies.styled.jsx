import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const StyledHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledSearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const StyledSerchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;

  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const StyledSearchLabel = styled.p`
  width: 32px;
  height: 32px;
  padding: 0;
  overflow: hidden;
`;

export const StyledSearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
export const StyledFilmsList = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const StyledFilmItem = styled(NavLink)`
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
