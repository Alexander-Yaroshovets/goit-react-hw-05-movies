import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
  display: block;
  padding: 20px;
`;
export const MovieInfoContainer = styled.div`
  display: flex;
`;
export const ImageWrapper = styled.div`
  display: block;
`;
export const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const MainInfoText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
export const InfoSpan = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
export const GenreInfo = styled.div`
  display: flex;
  text-align: center;
  align-items: baseline;
  font-size: 20px;
  font-weight: 500;
`;
export const GenreSpan = styled.p`
  margin-right: 5px;
`;
export const BackLink = styled(NavLink)`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-bottom: 10px;
  background-color: #a6efa6;

  &.active {
    color: white;
    background-color: #ff5100;
  }
`;
export const NextInfoLink = styled(NavLink)`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-bottom: 10px;
  background-color: #a6efa6;
  margin-right: 5px;

  &.active {
    color: white;
    background-color: #ff5100;
  }
`;
